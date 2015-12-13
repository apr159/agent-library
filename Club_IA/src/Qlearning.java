import java.util.*;


public class Qlearning {

	public static final double ALFA = 0.15;
	public static final double GAMMA = 0.9;
	
	public Double getMaxDouble(ArrayList<Double> acciones){
	/**
	 * Esta función recibe un vector de acciones posibles en
	 * sus valores numéricos y elige el valor más alto.
	 */
		Double maxDouble;
		
		maxDouble = acciones.get(0);
		for(Double j: acciones){
			maxDouble = (j>maxDouble) ? j : maxDouble;
		}
		
		return maxDouble;
		
	}
	
	public String getMaxString(ArrayList<Double> acciones){
		
		/**
		 * Recibe un vector de acciones posibles en su valor numérico, 
		 * selecciona el valor numérico más alto y apartir de ese
		 * valor se elije un string que determina la acción a tomar,
		 * la cual será la que se enviará a la interfaz de Fighting Ice
		 * para que ejecute la acción.
		 */
		
		String max = new String();
		Double maxDouble;
		Random explorar = new Random();
		Random accionAleatoria = new Random();
		int index;
		
		maxDouble = acciones.get(0);
		for(Double j: acciones){
			maxDouble = (j>maxDouble) ? j : maxDouble;
		}
		
		/*
		 * ya elegido el valor numérico más alto, se hace un tiro de
		 * moneda en donde se busca que el 70% se las veces se ejecute
		 * esta acción. El otro 30% de las vecs se elegirá una acción
		 * aleatoria.
		 * 
		 * La función get acción es la encargad de regresar el string
		 * a partir del índice del valor seleccionado.
		 */
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
		
		/**
		 * Se elige la recompensa, recibe:
		 * 
		 * estado : El estado actual del agente.
		 * newHpAbs: el Hp absoluto actual (myHp - enemyHp).
		 * lastHPAbs: Hp absoluto del estado anterior.
		 * 
		 * el parámetro estado no se utiliza en esta versión final de 
		 * recompensas, sin embargo se utilizó para pruebas iniciales y
		 * decide dejarse en caso de que sea de utilidad en un futuro.
		 */
		
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
		
		/**
		 * Se actualiza el Q(s, a) anterior a partir del Q(s, a) actual.
		 */
		
		Double lastQ_A = lastAction.get(indexLastMaxAction);
		lastQ_A = lastQ_A + ALFA*(reward + GAMMA*maxNewAction - lastQ_A);
		lastAction.set(indexLastMaxAction, lastQ_A);
		
	}
	
	public String getAction(int index){
		
		/**
		 * Esta función se llama en public String getMaxString(ArrayList<Double> acciones),
		 * recibe el índice de la acción seleccionada y regresa un string necesario para
		 * que la acción sea reconocida por la interfaz de Fighting Ice.
		 */
		
		String max = new String();
		
		if(index == 0){ max = "STAND_FB"; } // patada
		else if (index == 1){ max = "STAND_D_DF_FA"; } // poder a distancia
		else if (index == 2){ max = "9 6_B";} // salto al frente y patada
		else if (index == 3){ max = "6";} //hacia adelante
		else if (index == 4){ max = "CROUCH_FB";} // patada abajo
		else if (index == 5){ max = "STAND_F_D_DFA";} // poder de golpe hacia arriba
		else if (index == 6){ max = "7 4_B"; } // salto hacia atrás y patada
		else{ System.out.println("Error, acción no encontrada");}
		
		return max;
	}
	
}
