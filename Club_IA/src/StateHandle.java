import java.util.*;

public class StateHandle {
	/**
	 * Esta clase fue creada con el motivo de modificar el estado recibido para adecuarlo
	 * a un estado discretizado y por lo tanto, más fácil de manipular.
	 * 
	 * La discretización se da principalmente en la distancia medida en X entre el jugador
	 * 1 y el jugador 2, en donde a partir de un valor int [0, >400] se reduce a un 
	 * int [1, 3], según se considere cerca, medio, o lejos.
	 * 
	 */
	public ArrayList<String> discretizador(ArrayList<String> stateString){
		
		ArrayList<String> stateDiscret = new ArrayList<String>();
		
		//evalua distancia en X
		if(Integer.parseInt(stateString.get(0))>= 0 && Integer.parseInt(stateString.get(0)) < 60){
			stateDiscret.add("1"); //cerca
		}
		else if(Integer.parseInt(stateString.get(0))>= 60 && Integer.parseInt(stateString.get(0)) < 200){
			stateDiscret.add("2"); //medio
		}
		else{stateDiscret.add("3");} //lejos
		
		//evalua mi hp
		if (Integer.parseInt(stateString.get(1)) >= Integer.parseInt(stateString.get(2))){
			stateDiscret.add("1");
		}
		else{stateDiscret.add("0");}
		
		//evalua hp enemigo
		if (Integer.parseInt(stateString.get(2)) >= Integer.parseInt(stateString.get(1))){
			stateDiscret.add("1");
		}
		else{stateDiscret.add("0");}
		
		stateDiscret.add(stateString.get(3));
		stateDiscret.add(stateString.get(4));
		
		
		return stateDiscret;
	}
}
