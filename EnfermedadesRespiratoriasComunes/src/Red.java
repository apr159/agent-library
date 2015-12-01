/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Aivlis
 */
import java.util.Arrays;
import org.eclipse.recommenders.jayes.BayesNet;
import org.eclipse.recommenders.jayes.BayesNode;

public class Red {
    void Red(){
        BayesNet Enfermedades = new BayesNet(); //se crea la red.
        //se crean los primeros nodos padres.
        BayesNode TosSeca = Enfermedades.createNode("Tos Seca"); // se crea el nodo de tos seca.
        TosSeca.addOutcomes("True","False"); 
        TosSeca.setProbabilities(0.7,0.3); //la probabilidad de la tos seca
        BayesNode TosFlemas = Enfermedades.createNode("Tos con flemas"); // se crea el nodo de tos con flemas.
        TosFlemas.addOutcomes("True","False"); 
        TosFlemas.setProbabilities(0.7,0.3);// La probabilidad de la tos con flemas
        BayesNode Fiebre38 = Enfermedades.createNode("Fiebre de 38°"); //Se crea el nodo fiebre de 38°
        Fiebre38.addOutcomes("True","False");
        Fiebre38.setProbabilities(0.5,0.5); //La probabilidad de que tenga Fiebre de 38°.
        BayesNode FiebreMas38 = Enfermedades.createNode("Fiebre de 38° a 39°");
        FiebreMas38.addOutcomes("True","False");
        FiebreMas38.setProbabilities(0.7,0.3); //La probabilidad de que tenga Fiebre de 38° a 39°.
        BayesNode Fiebre40 = Enfermedades.createNode("Fiebre de 40°");//Se crea el nodo de fiebre de 40°.
        Fiebre40.addOutcomes("True","False");
        Fiebre40.setProbabilities(0.9,0.1); //La probabilidad de que tenga fiebre de 40°.
        BayesNode SilvidoRespirar = Enfermedades.createNode("Silvido al respirar");// se crea el nodo de silvido al respirar.
        SilvidoRespirar.addOutcomes("True","False");
        SilvidoRespirar.setProbabilities(0.8,0.2); //La probabilidad de que tnega Silvido al respirar.
        BayesNode SonidoRespirar = Enfermedades.createNode("Sonido al respirar");// Se crea el nodo de sonido al respirar.
        SonidoRespirar.addOutcomes("True","False");
        SonidoRespirar.setProbabilities(0.75,0.25);
        BayesNode Ronquera = Enfermedades.createNode("Ronquera"); //Se crea el nodo de ronquera.
        Ronquera.addOutcomes("True","false");
        Ronquera.setProbabilities(0.7,0.3);
        //Ahora se van a crear los nodos hijos.
        BayesNode CuerpoCortado = Enfermedades.createNode("Cuerpo Cortado"); // Se crea el nodo de cuerpo cortado.
        CuerpoCortado.setParents(Arrays.asList(Fiebre38));
        CuerpoCortado.addOutcomes("Gripa Comun");
        CuerpoCortado.setProbabilities(
            0.6,0.4, //Fiebre de 38 = True.
            0.1,0.9 //Fiebre de 38 = False.
        );
        
        // Se crea el nodo de Gripa Comun.
        BayesNode GripaComun = Enfermedades.createNode("Gripa Comun");
        GripaComun.setParents(Arrays.asList(CuerpoCortado,TosSeca));
        GripaComun.addOutcomes("Ronquera");
        GripaComun.setProbabilities(
                0.7,0.3, // Cuerpo Cortado = True.
                0.1,0.9, // Cuerpo Cortado = False.
                0.7,0.3, //Tos Seca = True.
                0.1,0.9 // Tos Seca = False.
        );
        //Se crea el nodo de Asma.
        BayesNode Asma = Enfermedades.createNode("Asma");
        Asma.setParents(Arrays.asList(TosSeca,TosFlemas,SilvidoRespirar));
        Asma.setProbabilities(
                0.6,0.4, //Tos seca = True.
                0.4,0.6, //Tos seca = False.
                0.6,0.4, //Tos con Flemas = True.
                0.4,0.6 //Tos con Flemas = False.
        );
        //Se crea el nodo de Laringitis.
        BayesNode Laringitis = Enfermedades.createNode("Laringitis"); 
        Laringitis.setParents(Arrays.asList(GripaComun,Ronquera));
        Laringitis.setProbabilities(
                
        );
        // Se crea el nodo de pulmonia.
        BayesNode Pulmonia = Enfermedades.createNode("Pulmonia");
        // Se crea el nodo de Bronquitis.
        BayesNode Bronquitis = Enfermedades.createNode("Bronquitis");
    }
}
