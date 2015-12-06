
import java.util.Random;

import structs.FrameData;
import structs.GameData;
import structs.Key;
import gameInterface.AIInterface;


public class RandomAI implements AIInterface {

	// Key class for return.
	Key inputKey;
	// is used for getting a random number.
	Random rnd;
	
	boolean playerNumber;
	
	@Override
	public void close() {
		// TODO Auto-generated method stub

	}

	@Override
	public void getInformation(FrameData frameData) {
		
	}

	@Override
	public int initialize(GameData gameData,boolean playerNumber) {
		// initializes a Key instance.
		inputKey = new Key();
		// initializes a random instance.
		rnd = new Random();
		
		return 0;
	}

	@Override
	public Key input() {
		// TODO Auto-generated method stub
		
		// returns Key
		return inputKey;
	}

	@Override
	public void processing() {
		// every key is set randomly.
		inputKey.A = (rnd.nextInt(10) > 4) ? true : false;
		inputKey.B = (rnd.nextInt(10) > 4) ? true : false;
		inputKey.C = (rnd.nextInt(10) > 4) ? true : false;
		inputKey.U = (rnd.nextInt(10) > 4) ? true : false;
		inputKey.D = (rnd.nextInt(10) > 4) ? true : false;
		inputKey.L = (rnd.nextInt(10) > 4) ? true : false;
		inputKey.R = (rnd.nextInt(10) > 4) ? true : false;
	}	

	public String getCharacter(){
		return CHARACTER_ZEN;
	}
	
}