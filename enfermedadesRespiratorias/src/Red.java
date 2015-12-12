import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import org.eclipse.recommenders.jayes.BayesNet;
import org.eclipse.recommenders.jayes.BayesNode;
import org.eclipse.recommenders.jayes.inference.IBayesInferer;
import org.eclipse.recommenders.jayes.inference.junctionTree.JunctionTreeAlgorithm;


/**
 *
 * @author Aivlis
 */
public class Red {
    BayesNet Enfermedades; 
//se crea la red.  
//se crea la red.  
    BayesNode TosSeca; 
    BayesNode TosFlemas; 
    BayesNode Fiebre38; 
    BayesNode FiebreMas38; 
    BayesNode Fiebre40;
    BayesNode SilvidoRespirar;
    BayesNode SonidoRespirar;
    BayesNode Ronquera; 
    BayesNode OpresionPecho;
    BayesNode CuerpoCortado; 
    BayesNode EscurrimientoNasal; 
    BayesNode GripaComun; 
    BayesNode Asma; 
    BayesNode Laringitis; 
    BayesNode Pulmonia; 
    BayesNode Bronquitis; 

    public Red() {
        this.Enfermedades = new BayesNet();
        this.Bronquitis = Enfermedades.createNode("Bronquitis");
        this.Pulmonia = Enfermedades.createNode("Pulmonia");
        this.Laringitis = Enfermedades.createNode("Laringitis");
        this.Asma = Enfermedades.createNode("Asma");
        this.GripaComun = Enfermedades.createNode("Gripa Comun");
        this.EscurrimientoNasal = Enfermedades.createNode("Escurrimiento nasal");
        this.CuerpoCortado = Enfermedades.createNode("Cuerpo Cortado");
        this.OpresionPecho = Enfermedades.createNode("Opresion en el pecho");
        this.Ronquera = Enfermedades.createNode("Ronquera");
        this.SonidoRespirar = Enfermedades.createNode("Sonido al respirar");
        this.SilvidoRespirar = Enfermedades.createNode("Silvido al respirar");
        this.Fiebre40 = Enfermedades.createNode("Fiebre de 40°");
        this.FiebreMas38 = Enfermedades.createNode("Fiebre de 38° a 39°");
        this.Fiebre38 = Enfermedades.createNode("Fiebre de 38°");
        this.TosFlemas = Enfermedades.createNode("Tos con flemas");
        this.TosSeca = Enfermedades.createNode("Tos Seca");
       
    }
    
    public double[]  CalcularGripaComun(String[] sintomas){ // Este funcion calcula las probabilidades de 
     
        TosSeca.addOutcomes("True","False"); 
        TosSeca.setProbabilities(0.7,0.3); //la probabilidad de la tos seca
        
        Fiebre38.addOutcomes("True","False");
        Fiebre38.setProbabilities(0.5,0.5); //La probabilidad de que tenga Fiebre de 38°.
       
        EscurrimientoNasal.addOutcomes("True","False");
        EscurrimientoNasal.setProbabilities(0.7,0.3); //La probabilidad de que tenga escurrimiento nasal.
        
        GripaComun.setParents(Arrays.asList(TosSeca,Fiebre38,EscurrimientoNasal));
        GripaComun.addOutcomes("True","False");
        GripaComun.setProbabilities(
                //tos seca=True, Fiebre38=True, Ecurrimiento=True,GripaComun=True)
                0.9,0.1,
                //tosSeca=True,Fiebre38=True,Escurrimiento=False
                0.75,0.25,
                //tosSeca=True,Fiebre38=False,Escurrimiento=True.
                0.8,0.2,
                //TosSeca=True,Fiebre38=False,Escurimiento=False.
                0.7,0.3,
                //TosSeca=False,Fiebre38=True,Escurrimiento=True.
                0.6,0.4,
                //Tosseca=False,Fiebre38=True,Escurrimiento=False.
                0.5,0.5,
                //TosSeca=False,Fiebre38=False,Escurmiento=True.
                0.4,0.6,
                //TosSeca=False,Fiebre38=False,Escurrmiento=False.
                0.01,0.99
        );
        IBayesInferer inferer = new JunctionTreeAlgorithm();
        inferer.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<BayesNode,String>();
        if(sintomas[0]=="True"){evidence.put(TosSeca, "True");} //si ha sido seleccionada la casilla de Tos seca.
        else{evidence.put(TosSeca, "False");} //si no ha sido seleccionada la casilla de Tos seca.
        if(sintomas[1]=="True"){evidence.put(Fiebre38, "True");}
        else{evidence.put(Fiebre38, "False");}
        if(sintomas[2]=="True"){evidence.put(EscurrimientoNasal, "True");}
        else{evidence.put(EscurrimientoNasal, "False");}
        double[] probabilidadGripaComun = inferer.getBeliefs(GripaComun); // se calcula la probabilidad de gripa comun.
        return probabilidadGripaComun;
    }
    
    public double[]  CalcularLaringitis(String sintomas,double[] GC){// Esta funcion calcula la probabilidad de 
        //que se presente laringitis.
        GripaComun.addOutcomes("True","False");
        GripaComun.setProbabilities(GC[0],GC[1]);// probabilidad de que tenga gripa comun
        Ronquera.addOutcomes("True","False");
        Ronquera.setProbabilities(0.9,0.1);//probabilidad de que tenga ronquera.
        Laringitis.setParents(Arrays.asList(GripaComun,Ronquera));
        Laringitis.addOutcomes("True","False");
        Laringitis.setProbabilities(
        //GripaComun==True
                0.8,0.2, //Ronquera==True.
                0.1,0.9, //Ronquera==False.
        //GripaComun==False);
                0.1,0.9, //Ronquera==True.
                0.01,0.99); //Ronquera==False.
        IBayesInferer inferer = new JunctionTreeAlgorithm();
        inferer.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        evidence.put(GripaComun, "True");
        if(sintomas=="True"){evidence.put(Ronquera, "True");}
        else{evidence.put(Ronquera, "False");}
        double[] probabilidadLaringitis = inferer.getBeliefs(Laringitis); //se calcula la probabilidad de Laringitis
        return probabilidadLaringitis;
    }
    
     public double[]  CalcularAsma(String[] sintomas){ //Esta funcion calcula la probabilidad de que se presente
         //asma.
        TosSeca.addOutcomes("True","False"); 
        TosSeca.setProbabilities(0.7,0.3); //la probabilidad de la tos seca
        TosFlemas.addOutcomes("True","False");
        TosFlemas.setProbabilities(0.7,0.3); //La probabilidad de que tenga Fiebre de 38°.
        SilvidoRespirar.addOutcomes("True","False");
        SilvidoRespirar.setProbabilities(0.7,0.3); //La probabilidad de que tenga escurrimiento nasal.
        Asma.setParents(Arrays.asList(TosSeca,TosFlemas,SilvidoRespirar));
        Asma.addOutcomes("True","False");
        IBayesInferer inferer = new JunctionTreeAlgorithm();
        inferer.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        if(sintomas[0]=="True"){evidence.put(TosSeca, "True");} //si ha sido seleccionada la casilla de Tos seca.
        else{evidence.put(TosSeca, "False");} //si no ha sido seleccionada la casilla de Tos seca.
        if(sintomas[1]=="True"){evidence.put(TosFlemas, "True");}
        else{evidence.put(TosFlemas, "False");}
        if(sintomas[2]=="True"){evidence.put(SilvidoRespirar, "True");}
        else{evidence.put(SilvidoRespirar, "False");}
        double[] probabilidadAsma = inferer.getBeliefs(Asma);//Calcula la probabilidad de que tenga asma.
        return probabilidadAsma; 
     }
     
     public double[]  CalcularBronquitis(String[] sintomas){//Esta funcion calcula la probabilidad de que se
         //prensete bronquitis
        FiebreMas38.addOutcomes("True","False");
        FiebreMas38.setProbabilities(0.8,0.2); //La probabilidad de que tenga Fiebre de 38° a 39°.
        CuerpoCortado.setParents(Arrays.asList(FiebreMas38));
        CuerpoCortado.addOutcomes("True","False");
        CuerpoCortado.setProbabilities(
            0.7,0.3, //Fiebre de 38 = True.
            0.1,0.9 //Fiebre de 38 = False.
        );
        TosFlemas.addOutcomes("True","False");
        TosFlemas.setProbabilities(0.85,0.25); //La probabilidad de que tenga Fiebre de 38°.
        OpresionPecho.setParents(Arrays.asList(TosFlemas));
        OpresionPecho.addOutcomes("True","False");
        OpresionPecho.setProbabilities(
                0.6,0.4, //Tos con flemas = True
                0.4,0.6 //Tos con flemas = False
        );
        Bronquitis.setParents(Arrays.asList(FiebreMas38,CuerpoCortado,TosFlemas,OpresionPecho));
        Bronquitis.addOutcomes("True","False");
        IBayesInferer inferer = new JunctionTreeAlgorithm();
        inferer.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        if(sintomas[0]=="True"){evidence.put(FiebreMas38, "True");} //si ha sido seleccionada la casilla de Tos seca.
        else{evidence.put(FiebreMas38, "False");} //si no ha sido seleccionada la casilla de Tos seca. 
        if(sintomas[2]=="True"){evidence.put(CuerpoCortado, "True");}
        else{evidence.put(CuerpoCortado, "False");}
        if(sintomas[2]=="True"){evidence.put(TosFlemas, "True");}
        else{evidence.put(TosFlemas, "False");}
        if(sintomas[3]=="True"){evidence.put(OpresionPecho, "True");}
        else{evidence.put(OpresionPecho, "False");}
        double[] probabilidadBronquitis = inferer.getBeliefs(Bronquitis); //calcula la probabilidad de bronquitis.
        return probabilidadBronquitis; 
     }
     
     public double[]  CalcularPulmonia(String[] sintomas){// Esta funcion calcula la probabilidad de que se
         //Presente bronquitis
        Fiebre40.addOutcomes("True","False");
        Fiebre40.setProbabilities(0.85,0.25); //La probabilidad de que tenga fiebre de 40°.
        CuerpoCortado.setParents(Arrays.asList(Fiebre40));
        CuerpoCortado.addOutcomes("True","False");
        CuerpoCortado.setProbabilities(
            0.9,0.1, //Fiebre de 38 = True.
            0.1,0.9 //Fiebre de 38 = False.
        );
        TosFlemas.addOutcomes("True","False");
        TosFlemas.setProbabilities(0.8,0.2); //La probabilidad de que tenga Fiebre de 38°.
        IBayesInferer inferer = new JunctionTreeAlgorithm();
        inferer.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        if(sintomas[0]=="True"){evidence.put(Fiebre40, "True");}
        else{evidence.put(Fiebre40, "False");}
        if(sintomas[1]=="True"){evidence.put(CuerpoCortado, "True");}
        else{evidence.put(CuerpoCortado, "False");}
        if(sintomas[2]=="True"){evidence.put(TosFlemas, "True");}
        else{evidence.put(TosFlemas, "False");}
        double[] probabilidadPulmonia = inferer.getBeliefs(Pulmonia);//Calcula la probabilidad de pulmonia.
        return probabilidadPulmonia; 
     }
}
