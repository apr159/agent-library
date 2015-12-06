import java.util.*;


public class Qlearning {

	public static final double ALFA = 0.15;
	public static final double GAMMA = 0.9;
	
	public Double getMaxDouble(ArrayList<Double> acciones){
		
		Double maxDouble;
		
		maxDouble = acciones.get(0);
		for(Double j: acciones){
			maxDouble = (j>maxDouble) ? j : maxDouble;
		}
		
		return maxDouble;
		
	}
	
	public String getMaxString(ArrayList<Double> acciones){
		
		String max = new String();
		Double maxDouble;
		Random explorar = new Random();
		Random accionAleatoria = new Random();
		int index;
		
		maxDouble = acciones.get(0);
		for(Double j: acciones){
			maxDouble = (j>maxDouble) ? j : maxDouble;
		}
		
		
		if(explorar.nextDouble() > 0.7){
			index = accionAleatoria.nextInt(acciones.size());
			max = getAction(index);
			System.out.println("*****EXPLORACION*****");
		}
		else {
			index = acciones.indexOf(maxDouble);
			max = getAction(index);
		}
				
		System.out.println("maxAccion = " + max);
		return max;
		
	}
	
	public int getReward(ArrayList<String> estado, int newHpAbs, int lastHpAbs){
		int reward = 0;
		
		if(newHpAbs > lastHpAbs){
			if (newHpAbs < 0){ reward = 100; }
			else if (newHpAbs >= 0 && newHpAbs < 50){ reward = 5; }
			else{ reward = 1000; }
		}
		else{
			if (newHpAbs < 0){ reward = -200; }
			else if (newHpAbs >= 0 && newHpAbs < 50){ reward = -50; }
			else{ reward = -10; }
		}
		
		System.out.println("lastHp = " + lastHpAbs + " newHp = "+ newHpAbs + " reward = "+ reward);
		return reward;
	}
	
	public void learn(ArrayList<Double> lastAction, int indexLastMaxAction , Double maxNewAction, int reward){
		
		Double lastQ_A = lastAction.get(indexLastMaxAction);
		lastQ_A = lastQ_A + ALFA*(reward + GAMMA*maxNewAction - lastQ_A);
		lastAction.set(indexLastMaxAction, lastQ_A);
		
	}
	
	public String getAction(int index){
		String max = new String();
		
		if(index == 0){ max = "STAND_FB"; }
		else if (index == 1){ max = "STAND_D_DF_FA"; }
		else if (index == 2){ max = "9 6_B";}
		else if (index == 3){ max = "6";}
		else if (index == 4){ max = "CROUCH_FB";}
		else if (index == 5){ max = "STAND_F_D_DFA";}
		else if (index == 6){ max = "7 4_B"; }
		else{ System.out.println("Error, acción no encontrada");}
		
		return max;
	}
	
}
