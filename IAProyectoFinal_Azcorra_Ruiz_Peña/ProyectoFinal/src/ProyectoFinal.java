import gameInterface.AIInterface;
import simulator.Simulator;
import structs.FrameData;
import structs.GameData;
import structs.Key;
import commandcenter.CommandCenter;
import enumerate.State;
import structs.CharacterData;


public class ProyectoFinal implements AIInterface {

	private Key inputKey;
	private boolean player;
	private FrameData frameData;
	private CommandCenter cc;
	private Simulator simulator;
	private GameData gd;
	
	private int distance;
	private int energy;
	private CharacterData opp;
	private CharacterData my;
	private boolean JuegoEmpezado;
	private int xDifference;
	
	@Override
	public void close() {
		
	}

	@Override
	public String getCharacter() {
		//Selecciona al personaje ZEN (Pero esto era solo para el torneo y nosotros no lo implementamos con esas reglas)
		return CHARACTER_ZEN;
	}

	@Override
	public void getInformation(FrameData frameData) {
		// Carga de nuevo el juego cada vez que se llama a la función de getInformation
		this.frameData = frameData;
	}

	@Override
	public int initialize(GameData arg0, boolean player) {
		// Inicializa las variables en general cuando empieza la pelea
		inputKey = new Key();
		this.player = player;
		frameData = new FrameData();
		cc = new CommandCenter();	
		gd = arg0;
		simulator = gd.getSimulator();
		JuegoEmpezado = true; //Cuando el juego empieza, saca a los jugadores a una distancia de -300, en la siguiente lnea de código se muestra
		xDifference = -300;
		return 0;
	}

	@Override
	public Key input() {
		// Toma la variable entrada global
		return inputKey;
	}

	@Override
	public void processing() {
		// Se checa si se está en el final del round para asi pasar al siguiente
		if(!frameData.getEmptyFlag() && frameData.getRemainingTime()>0){
			// Simula una demora y mira hacia adelante 2 fotogramas.
			if (!JuegoEmpezado)
				frameData = simulator.simulate(frameData, this.player, null, null, 17);
			else
				JuegoEmpezado = false; //Si el juego ya empezó no simula nada, esto para evitar algun conflicto posterior ya sea un crasheo o algo por el estilo
			cc.setFrameData(frameData, player);
			distance = cc.getDistanceX();
			energy = frameData.getMyCharacter(player).getEnergy();
			my = cc.getMyCharacter();
			opp = cc.getEnemyCharacter();
			xDifference = my.x - opp.x;
			
			if (cc.getskillFlag()) {
				// Mantiene la ejecucion del comando actual, todo para evitar conflictos con otros comandos
				inputKey = cc.getSkillKey();
			}
			else {
				//Se resetean las Keys y los Skills
				inputKey.empty(); 
				cc.skillCancel();
				// Empieza el agente y se muestran las secuancias que toma el agente dependiendo de la distancia del contrincante
				//En esta parte es donde se empieza a omar en cuenta las distancias del oponente para así realizar un ataque según sea el caso
				if ((opp.energy >= 300) && ((my.hp - opp.hp) <= 300))
					cc.commandCall("FOR_JUMP _B B B");
					// En esta linea anterior muestra si el oponente ya tiene más de 300 de energia puede ser más peligroso para su ataque "Especial"
					// La segunda condicion demuestra que si el Hp nuestro es mayor entonces nuestro dominio es mayor
				else if (!my.state.equals(State.AIR) && !my.state.equals(State.DOWN)) { //if not in air
					if ((distance > 150)) {
						cc.commandCall("FOR_JUMP"); //Brinca para acercarse al oponente más rapido
					}
					else if (energy >= 300)
						cc.commandCall("STAND_D_DF_FC"); //Lanza golpe
					else if ((distance > 100) && (energy >= 50))
						cc.commandCall("STAND_D_DB_BB"); //Lanza una patada deslizante
					else if (opp.state.equals(State.AIR)) //Si el estado del oponente esta en el aire entonces...
						cc.commandCall("STAND_F_D_DFA"); //Lanza un golpe cuando el enemigo este bajando
					else if (distance > 100)
						cc.commandCall("6 6 6"); // Se acerca de manera rápida
					else
						cc.commandCall("B"); //Ataca de modo random
				}
				else if ((distance <= 150) && (my.state.equals(State.AIR) || my.state.equals(State.DOWN)) 
						&& (((gd.getStageXMax() - my.x)>=200) || (xDifference > 0))
						&& ((my.x >=200) || xDifference < 0)) { //Aqui estan las condiciones cuando el oponente esta en esquina acorralado
					if (energy >= 5) 
						cc.commandCall("AIR_DB"); // Salta en el aire y realiza una patada ahi mismo
					else
						cc.commandCall("B"); //Realiza una patada y empieza a atacar de modo aleatorio para asi realizar el mayor daño posible
				}	
				else
					cc.commandCall("B"); 
			}
		}
		else JuegoEmpezado = true;
	}
}
