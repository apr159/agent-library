import java.io.*;
import java.util.*;
import java.net.*;

public class DataIO{
	
	/**
	 * DataIO se encarga de la creación de la tabla a partir de un archivo txt y también
	 * del almacenaje de la misma al finalizar su uso. La tabla se almacenará en el mismo
	 * archivo del cual los datos fueron leídos, tal archivo es definido al momento de
	 * instanciar el objeto DataIO según sea el parámetro que se le pase.
	 * 
	 * Recibe como entrada un String con el nombre/ubicación del archivo a utilizar.
	 * 
	 * Métodos:
	 * 
	 * + public ArrayList<ArrayList<String>> readFile()
	 * + public void writeFile(ArrayList<ArrayList<String>> tabla)
	 */
	

	File base = null; 
	File datafile= null;
		
	public DataIO(){
		try{
			this.base = new File(DataIO.class.getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile();
			this.datafile =  new File(base,"data.txt");
		}
		catch(URISyntaxException o){
			System.err.println(o);
		}
	}
	
	public DataIO(String nombreArchivo){
		try{
			this.base = new File(DataIO.class.getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile();
			this.datafile =  new File(base, nombreArchivo);
		}
		catch(URISyntaxException o){
			System.err.println(o);
		}

	}	
	
	public ArrayList<ArrayList<String>> readFile() {

		/**
		 * 	readFile se encarga de tomar los datos almacenados en un archivo llamado
		 *  según el parámetro de entrada de la clase y lo procesa para que se integren 
		 *  al programa ordenados en una matriz (ArrayList).
		 */
		
		ArrayList<ArrayList<String>> tabla = new ArrayList<ArrayList<String>>();
		
		try{
			
			BufferedReader br = new BufferedReader(new FileReader(this.datafile));
		 
			String line = null;
			String[] lineDividida = null;
			while ((line = br.readLine()) != null) {
				lineDividida = line.split(" ");
				ArrayList <String> arrlTemp = new ArrayList <String>(); 
				for (String i: lineDividida){
					arrlTemp.add(i);
				}
				tabla.add(arrlTemp);			
			}
		 
			br.close();
			System.out.println("Archivo leido");
		}
		catch(IOException e){
			System.err.println(e);
		}
		
		
		return tabla;
	}

	public void writeFile(ArrayList<ArrayList<String>> tabla){
		
		/**
		 * writeFile se encarga de almacenar todos los datos de la tabla pasada por parametro
		 * en el mismo archivo que se haya utilizado para crear la tabla durante el método
		 * readFile. El archivo se define al instanciar el objeto DataIO, ya sea según el
		 * parametro que le sea pasado.
		 */
		
		try{
			FileOutputStream fos = new FileOutputStream(this.datafile);
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
		 
			String line = "";
			for (ArrayList<String> i: tabla) {
				for(String j: i){
					line += j + " ";
				}
				bw.write(line);
				bw.newLine();
				line = "";
			}
		 
			bw.close();
			fos.close();
			System.out.println("Archivo escrito");
		}
		catch(IOException e){
			System.err.println(e);
		}
		
		
	}
	
	// %%%%%%% Código utilizado para probar y depurar la clase.
	
	
	/*
	public static void main(String[] args){
		DataIO io = new DataIO("data.txt");
		ArrayList<ArrayList<String>> tabla = io.readFile();
		
		// %%%%%%%%%%% Imprime datos cargados
		System.out.println("Datos cargados desde archivo:" + "\n");
		for(ArrayList <String> i: tabla){
			
			for(String j: i){
				System.out.print(j + " ");
			}
			
			System.out.print("\n");
		
		}
		// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
		
		io.writeFile(tabla);
	}
	*/
	
	

	

}
