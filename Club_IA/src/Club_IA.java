import structs.FrameData;
import structs.GameData;
import structs.Key;
import gameInterface.AIInterface; 
import commandcenter.CommandCenter;
import enumerate.Action;
import structs.MotionData;
import java.util.*;

public class Club_IA implements AIInterface {
	
	Key inputKey;
	boolean playerNumber;
	FrameData frameData;
	CommandCenter cc;

	ArrayList<ArrayList<String>> tablaEstados;
	ArrayList<ArrayList<String>> tablaAcciones;
	ArrayList<ArrayList<Double>> tablaAccionesDouble;
	
	ArrayList<String> lastState;
	ArrayList<String> newState;
	ArrayList<Double> lastAction;
	ArrayList<Double> newAction;
	Double maxDouble;
	String maxString;
	int newHpAbs;
	int lastHpAbs;
	
	
	
	DataIO ioEstados = new DataIO();
	DataIO ioAcciones = new DataIO("qdata.txt");
	StateHandle sth = new StateHandle();
	Qlearning ql = new Qlearning();
	
	Random ran = new Random();
	
	@Override
	public int initialize(GameData gameData, boolean playerNumber){ 
		this.playerNumber = playerNumber;
		this.inputKey = new Key();
		cc = new CommandCenter();
		frameData = new FrameData();
		
		tablaEstados = ioEstados.readFile();
		for(ArrayList<String> i: tablaEstados){
			for(String j: i){ System.out.print(j + " "); }
			System.out.println(" ");
		}
		
		
		tablaAcciones = ioAcciones.readFile();
		tablaAccionesDouble = new ArrayList<ArrayList<Double>>();
		
		for(ArrayList<String> i: tablaAcciones){
			ArrayList<Double> nAction = new ArrayList<Double>();
			for(String j: i){ 
				Double d  = Double.parseDouble(j);
				System.out.print(d + " ");
				nAction.add(d); 
			}
			System.out.println(" ...nActions");
			tablaAccionesDouble.add(nAction);
		}
		newState = new ArrayList<String>();
		newAction = new ArrayList<Double>();
		lastState = tablaEstados.get(0);
		lastAction = tablaAccionesDouble.get(0);
		newHpAbs = 0;
		lastHpAbs = 0;

		return 0;
	}
	
	@Override
	public void getInformation(FrameData frameData){ 
		this.frameData = frameData;
		cc.setFrameData(this.frameData, playerNumber);
	}
	
	@Override
	public void processing() {

		if(!frameData.getEmptyFlag() && frameData.getRemainingTime() > 0){
			if(cc.getskillFlag()){ inputKey = cc.getSkillKey(); }
			else{
				inputKey.empty();
				cc.skillCancel();
				
				newState = new ArrayList<String>();
				newAction = new ArrayList<Double>();
				
				// agrega información del estado en string
				newState.add(String.valueOf(cc.getDistanceX())); // distancia en X
				newState.add(String.valueOf(cc.getMyHP()));  // mi HP
				newState.add(String.valueOf(cc.getEnemyHP()));  // enemigo HP
				newState.add(cc.getEnemyCharacter().state.toString());  // estado del enemigo
				newState.add(cc.getEnemyCharacter().action.toString());  // accion del enemigo
				newState = sth.discretizador(newState);
				
				 
				
				if(!newState.equals(lastState)){
				
					if(tablaEstados.contains(newState)){ // se ejecuta si el estado actual ya  existe en la tabla
						System.out.println("newState en tablaEstados."); 
						
						
						int indexNewState = tablaEstados.indexOf(newState); 
						int indexLastState = tablaEstados.indexOf(lastState);
						
						int indexNewAction = indexNewState;
						int indexLastAction = tablaAccionesDouble.indexOf(lastAction);
						
						
						System.out.println("indexLastState = " + indexLastState);
						System.out.println("indexNewState = " + indexNewState);
						System.out.println("indexLastAction = " + indexLastAction);
						System.out.println("indexNewAction = " + indexNewAction);
						
						// copia el estado y acción desde la tabla
						newState = tablaEstados.get(indexNewState);
						newAction = tablaAccionesDouble.get(indexNewAction);
						
						// control** , imprime valores numéricos de las acciones
						for(Double i: newAction){
							System.out.print(i + " ");
						}
						System.out.println(" ");
						
						maxDouble = ql.getMaxDouble(newAction); //regresa el valor numérico más alto
						maxString = ql.getMaxString(newAction); //regresa string para ejecutar acción
						System.out.println("maxDouble = " + maxDouble);
						int indexNewMaxAction = newAction.indexOf(maxDouble);
						
						cc.commandCall(maxString); // ejecuta acción
						int myHp = cc.getMyHP();
						int enemyHp = cc.getEnemyHP();
						newHpAbs = myHp - enemyHp;
						
						//actualiza Q(s, a) anterior al actual
						ql.learn(lastAction, indexNewMaxAction,  maxDouble, ql.getReward(newState, newHpAbs, lastHpAbs));
						
						lastState = newState;
						lastAction = newAction;
						lastHpAbs = newHpAbs;
						
					}
					else{ //se ejecuta si no existe el estado actual en la tabla
						System.out.println("newState NO en tablaEstados.");
						
						
						//%%%%%%%%%%%%%%%%%% crea Q(s, a) y lo agrega a tabla
						tablaEstados.add(newState);
						ArrayList<Double> newActions = new ArrayList<Double>();
						for(Double i: lastAction){
							newActions.add(ran.nextDouble());
						}
						tablaAccionesDouble.add(newActions);
						
						//%%%%%%%%%%%%%%%%%%%
						
						
						// a partir de aquí es el mismo algoritmo que sigue cuando existe un estato en la tabla
						int indexNewState = tablaEstados.indexOf(newState);
						int indexLastState = tablaEstados.indexOf(lastState);
						
						int indexNewAction = tablaAccionesDouble.indexOf(newActions);
						int indexLastAction = tablaAccionesDouble.indexOf(lastAction);
						
						System.out.println("indexLastState = " + indexLastState);
						System.out.println("indexNewState = " + indexNewState);
						System.out.println("indexLastAction = " + indexLastAction);
						System.out.println("indexNewAction = " + indexNewAction);
						
						newState = tablaEstados.get(indexNewState);
						newAction = tablaAccionesDouble.get(indexNewAction);
						
						for(Double i: newAction){
							System.out.print(i + " ");
						}
						System.out.println(" ");
						
						maxDouble = ql.getMaxDouble(newAction);
						maxString = ql.getMaxString(newAction);
						System.out.println("maxDouble = " + maxDouble);
						int indexNewMaxAction = newAction.indexOf(maxDouble);
						
						cc.commandCall(maxString);
						int myHp = cc.getMyHP();
						int enemyHp = cc.getEnemyHP();
						newHpAbs = myHp - enemyHp;
						ql.learn(lastAction, indexNewMaxAction,  maxDouble, ql.getReward(newState, newHpAbs, lastHpAbs));
						
						lastState = newState;
						lastAction = newAction;
						lastHpAbs = newHpAbs;
					}
					
				}
				
				
			}
		}	
	}
	
	@Override
	public Key input(){ 
		return inputKey;
	}

	@Override
	public void close(){
		ioEstados.writeFile(tablaEstados);
		
		tablaAcciones.clear();
		for(ArrayList<Double> i: tablaAccionesDouble){
			ArrayList<String> axxion = new ArrayList<String>();
			for(Double j: i){
				axxion.add(String.valueOf(j));
			}
			tablaAcciones.add(axxion);
		}
		ioAcciones.writeFile(tablaAcciones);
		
		System.out.println("cerrando");
	}

	@Override
	public String getCharacter(){
		return CHARACTER_ZEN;
	}
	
	}

