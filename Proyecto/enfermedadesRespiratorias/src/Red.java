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
    BayesNet Enfermedades;  //se crea la red.  
    BayesNode TosSeca;  //Se crea el nodo de Tos Seca.
    BayesNode TosFlemas;  //Se crea el nodo de Tos con Flemas.
    BayesNode Fiebre38;  //Se crea el nodo de Fiebre de 38°.
    BayesNode FiebreMas38; //Se crea el nodo de Fiebre mayor a 38°.
    BayesNode Fiebre40; //Se crea el nodo de Fiebre de 40.°
    BayesNode SilvidoRespirar; //Se crea el nodo de silvido al respirar.
    BayesNode SonidoRespirar; //Se crea el nodo de Sonido al respirar. 
    BayesNode Ronquera; //Se crea el nodo de ronquera.
    BayesNode OpresionPecho; //Se crea el nodo de Opresion en el pecho
    BayesNode CuerpoCortado; //Se crea el nodo de cuerpo cortado.
    BayesNode EscurrimientoNasal; //Se crea el nodo de escurrimiento nasal.
    BayesNode GripaComun; //se crea el nodo de gripa comun.
    BayesNode Asma; //Se crea el nodo de Asma.
    BayesNode Laringitis; //Se crea el nodo de Laringitis.
    BayesNode Pulmonia; //Se crea el nodo de pulmonia.
    BayesNode Bronquitis; //Se crea el nodo de bronquitis.

    public Red() { //Es el constructor de la clase Red.
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
        Enfermedades = new BayesNet(); //se inicializa la red Enfermedades.
        TosSeca = Enfermedades.createNode("Tos Seca"); //se crea el nodo TosSeca, que es de la red Enfermedades.
        TosSeca.addOutcomes("True","False"); //Se le asignan valores "True" o "False".
        TosSeca.setProbabilities(0.7,0.3); //Se asigna la probabilidad de la tos seca
        Fiebre38 = Enfermedades.createNode("Fiebre de 38°"); //Se crea el nodo de Fiebre38, que es parte de la red Enfermedades. 
        Fiebre38.addOutcomes("True","False"); //Se le asignan valores "True" o "False".
        Fiebre38.setProbabilities(0.5,0.5); //La probabilidad de que tenga Fiebre de 38°.
        EscurrimientoNasal = Enfermedades.createNode("Escurrimiento nasal"); //Se crea el nodo EscurrimientoNazal
        EscurrimientoNasal.addOutcomes("True","False"); //Se le asignan valores "True" o "False".
        EscurrimientoNasal.setProbabilities(0.7,0.3); //La probabilidad de que tenga escurrimiento nasal.
        GripaComun = Enfermedades.createNode("Gripa Comun");
        GripaComun.setParents(Arrays.asList(TosSeca,Fiebre38,EscurrimientoNasal));//Se asignan los padres de gripa comun
        GripaComun.addOutcomes("True","False");
        double P[]=new double[16];
        int cont1=0;
        int cont2=0;
        int cont3=0;
        double t[]=TosSeca.getProbabilities();
        double f[]=Fiebre38.getProbabilities();
        double e[]=EscurrimientoNasal.getProbabilities();
        double ng;
        double g;
        double gripa[]={0.9,0.7,0.8,0.6,0.6,0.4,0.4,0.01};
        int aux=0;
        for(int i=0;i<16;i=i+2){
            if(cont3==2){
                cont3=0;
                cont2++;
            }
            if(cont2==2){
                cont2=0;
                cont1++;
            }
            g=gripa[aux]*t[cont1]*f[cont2]*e[cont3];
            ng=(1-gripa[aux])*t[cont1]*f[cont2]*e[cont3];
            P[i]=g/(g+ng);
            P[i+1]=ng/(ng+g);
            cont3++;
            aux++;
        }
        GripaComun.setProbabilities(
                //tos seca=True, Fiebre38=True, Ecurrimiento=True
                P[0],P[1],
                //tosSeca=True,Fiebre38=True,Escurrimiento=False
                P[2],P[3],
                //tosSeca=True,Fiebre38=False,Escurrimiento=True.
                P[4],P[5],
                //TosSeca=True,Fiebre38=False,Escurimiento=False.
                P[6],P[7],
                //TosSeca=False,Fiebre38=True,Escurrimiento=True.
                P[8],P[9],
                //Tosseca=False,Fiebre38=True,Escurrimiento=False.
                P[10],P[11],
                //TosSeca=False,Fiebre38=False,Escurmiento=True.
                P[12],P[13],
                //TosSeca=False,Fiebre38=False,Escurrmiento=False.
                P[14],P[15]
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
        inferer.setEvidence(evidence);
        double[] probabilidadGripaComun = inferer.getBeliefs(GripaComun); // se calcula la probabilidad de gripa comun.
        return probabilidadGripaComun;
    }
    
    public double[]  CalcularLaringitis(String sintomas,double[] GC){// Esta funcion calcula la probabilidad de 
        //que se presente laringitis.
        Enfermedades = new BayesNet();
        GripaComun = Enfermedades.createNode("Gripa Comun");
        GripaComun.addOutcomes("True","False");
        GripaComun.setProbabilities(0.85,0.25);// probabilidad de que tenga gripa comun
        Ronquera = Enfermedades.createNode("Ronquera");
        Ronquera.addOutcomes("True","False");
        Ronquera.setProbabilities(0.85,0.25);//probabilidad de que tenga ronquera.
        Laringitis = Enfermedades.createNode("Laringitis");
        Laringitis.setParents(Arrays.asList(GripaComun,Ronquera));
        Laringitis.addOutcomes("True","False");
        Laringitis.setProbabilities(
        //GripaComun==True
                0.85,0.15, //Ronquera==True.
                0.1,0.9, //Ronquera==False.
        //GripaComun==False);
                0.1,0.9, //Ronquera==True.
                0.01,0.99); //Ronquera==False.
        IBayesInferer infererL = new JunctionTreeAlgorithm();
        infererL.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        if(GC[0]>=0.8){evidence.put(GripaComun, "True");}
        else{evidence.put(GripaComun, "False");}
        if(sintomas=="True"){evidence.put(Ronquera, "True");}
        else{evidence.put(Ronquera, "False");}
        infererL.setEvidence(evidence);
        double[] probabilidadLaringitis = infererL.getBeliefs(Laringitis); //se calcula la probabilidad de Laringitis
        return probabilidadLaringitis;
    }
    
     public double[]  CalcularAsma(String[] sintomas){ //Esta funcion calcula la probabilidad de que se presente
         //asma.
        Enfermedades = new BayesNet();
        TosSeca = Enfermedades.createNode("Tos Seca");
        TosSeca.addOutcomes("True","False"); 
        TosSeca.setProbabilities(0.7,0.3); //la probabilidad de la tos seca
        TosFlemas = Enfermedades.createNode("Tos con Flemas");
        TosFlemas.addOutcomes("True","False");
        TosFlemas.setProbabilities(0.7,0.3); //La probabilidad de que tenga Fiebre de 38°.
        SilvidoRespirar = Enfermedades.createNode("Silvido al respirar");
        SilvidoRespirar.addOutcomes("True","False");
        SilvidoRespirar.setProbabilities(0.8,0.2); //La probabilidad de que tenga escurrimiento nasal.
        Asma = Enfermedades.createNode("Asma");
        Asma.setParents(Arrays.asList(TosSeca,TosFlemas,SilvidoRespirar));
        Asma.addOutcomes("True","False");
        Asma.setProbabilities(
                //Tos seca=True, TOsFlemas=True, Silvido Respirar = True.
                0.8,0.2,
                //TosSeca=True, TosFlemas=True, SilvidoRespirar=False.
                0.4,0.6,
                //TosSeca=True,TosFlemas=False,SilvidoRespirar=True.
                0.8,0.2,
                //TosSeca=True,TosFlemas=False,SilvidoRespirar=False.
                0.4,0.6,
                //TosSeca=False,TosFlemas=True,SilvidoRespirar=True
                0.8,0.2,
                //TosSeca=False,TosFlemas=True,SilvidoRespirar=False.
                0.4,0.6,
                //TosSeca=False,TosFlemas=False,SilvidoRespirar=True.
                0.5,0.5,
                //TosSeca=False,TosFlemas=False,SilvidoRespirar=False.
                0.01,0.99
        );
        IBayesInferer infererA = new JunctionTreeAlgorithm();
        infererA.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        if(sintomas[0]=="True"){evidence.put(TosSeca, "True");} //si ha sido seleccionada la casilla de Tos seca.
        else{evidence.put(TosSeca, "False");} //si no ha sido seleccionada la casilla de Tos seca.
        if(sintomas[1]=="True"){evidence.put(TosFlemas, "True");}
        else{evidence.put(TosFlemas, "False");}
        if(sintomas[2]=="True"){evidence.put(SilvidoRespirar, "True");}
        else{evidence.put(SilvidoRespirar, "False");}
        infererA.setEvidence(evidence);
        double[] probabilidadAsma = infererA.getBeliefs(Asma);//Calcula la probabilidad de que tenga asma.
        return probabilidadAsma; 
     }
     
     public double[]  CalcularBronquitis(String[] sintomas){//Esta funcion calcula la probabilidad de que se
        //presente bronquitis
        Enfermedades = new BayesNet();
        FiebreMas38 = Enfermedades.createNode("Fiebre de 38 o mas");
        FiebreMas38.addOutcomes("True","False");
        FiebreMas38.setProbabilities(0.8,0.2); //La probabilidad de que tenga Fiebre de 38° a 39°.
        TosFlemas = Enfermedades.createNode("Tos con flemas");
        TosFlemas.addOutcomes("True","False");
        TosFlemas.setProbabilities(0.7,0.3); //La probabilidad de que tenga Fiebre de 38°.
        OpresionPecho = Enfermedades.createNode("Opresion en el pecho");
        OpresionPecho.setParents(Arrays.asList(TosFlemas));
        OpresionPecho.addOutcomes("True","False");
        OpresionPecho.setProbabilities(
                0.8,0.2, //Tos con flemas = True
                0.4,0.6 //Tos con flemas = False
        );
        SonidoRespirar = Enfermedades.createNode("Sonido al respirar");
        SonidoRespirar.addOutcomes("True","False");
        SonidoRespirar.setProbabilities(0.8,0.2);
        Bronquitis = Enfermedades.createNode("Bronquitis");
        Bronquitis.setParents(Arrays.asList(FiebreMas38,TosFlemas,OpresionPecho,SonidoRespirar));
        Bronquitis.addOutcomes("True","False");
        Bronquitis.setProbabilities(
                //FiebreMas38=True,TosFlemas=True,OpresionPecho=True,SonidoRespirar=True.
                0.9,0.1,
                //FiebreMas38=True,TosFlemas=True,OpresionPecho=True,SonidoRespirar=False.
                0.8,0.2,
                //FiebreMas38=True,TosFlemas=True,OpresionPecho=False,SonidoRespirar=True.
                0.7,0.3,
                //FiebreMas38=True,TosFlemas=True,OpresionPecho=False,SonidoRespirar=False.
                0.5,0.5,
                //FiebreMas38=True,TosFlemas=False,OpresionPecho=True,SonidoRespirar=True.
                0.65,0.35,
                //FiebreMas38=True,TosFlemas=False,OpresionPecho=True,SonidoRespirar=False.
                0.55,0.45,
                //fiebreMas38=True,TosFLemas=False,OpresionPecho=False,SonidoRespirar=True.
                0.3,0.7,
                //fiebreMas38=True,TosFLemas=False,OpresionPecho=False,SonidoRespirar=False.
                0.2,0.8,
                //FiebreMas38=False,TosFlemas=True,OpresionPecho=True,SonidoRespirar=True.
                0.7,0.3,
                //FiebreMas38=False,TosFlemas=True,OpresionPecho=True,SonidoRespirar=False.
                0.5,0.5,
                //FiebreMas38=False,TosFlemas=True,OpresionPecho=False,SonidoRespirar=True.
                0.6,0.4,
                //FiebreMas38=False,TosFlemas=True,OpresionPecho=False,SonidoRespirar=False.
                0.2,0.8,
                //FiebreMas38=False,TosFLemas=False,OpresionPEcho=True,SonidoRespirar=True.
                0.5,0.5,
                //FiebreMas38=False,TosFLemas=False,OpresionPEcho=True,SonidoRespirar=False.
                0.2,0.8,
                //FiebreMas38=False,TosFLemas=False,OpresionPecho=False,SonidoRespirar=True.
                0.2,0.8,
                //FiebreMas38=False,TosFLemas=False,OpresionPecho=False,SonidoRespirar=False.
                0.01,0.99
        );
        IBayesInferer inferer = new JunctionTreeAlgorithm();
        inferer.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        if(sintomas[0]=="True"){evidence.put(TosFlemas, "True");} //si ha sido seleccionada la casilla de Tos seca.
        else{evidence.put(TosFlemas, "False");} //si no ha sido seleccionada la casilla de Tos seca. 
        if(sintomas[1]=="True"){evidence.put(OpresionPecho, "True");}
        else{evidence.put(OpresionPecho, "False");}
        if(sintomas[2]=="True"){evidence.put(FiebreMas38, "True");}
        else{evidence.put(FiebreMas38, "False");}
        if(sintomas[3]=="True"){evidence.put(SonidoRespirar,"True");}
        else{evidence.put(SonidoRespirar,"False");}
        inferer.setEvidence(evidence);
        double[] probabilidadBronquitis = inferer.getBeliefs(Bronquitis); //calcula la probabilidad de bronquitis.
        return probabilidadBronquitis; 
     }
     
     public double[]  CalcularPulmonia(String[] sintomas){// Esta funcion calcula la probabilidad de que se
         //Presente bronquitis
        Enfermedades = new BayesNet();
        Fiebre40 = Enfermedades.createNode("Fiebre de 40");
        Fiebre40.addOutcomes("True","False");
        Fiebre40.setProbabilities(0.85,0.25); //La probabilidad de que tenga fiebre de 40°.
        CuerpoCortado = Enfermedades.createNode("Cuerpo Cortado");
        CuerpoCortado.setParents(Arrays.asList(Fiebre40));
        CuerpoCortado.addOutcomes("True","False");
        CuerpoCortado.setProbabilities(
            0.9,0.1, //Fiebre de 38 = True.
            0.1,0.9 //Fiebre de 38 = False.
        );
        TosFlemas = Enfermedades.createNode("Tos con FLemas");
        TosFlemas.addOutcomes("True","False");
        TosFlemas.setProbabilities(0.8,0.2); //La probabilidad de que tenga Fiebre de 38°.
        Pulmonia = Enfermedades.createNode("Pulmonia");
        Pulmonia.setParents(Arrays.asList(Fiebre40,CuerpoCortado,TosFlemas));
        Pulmonia.addOutcomes("True","False");
        Pulmonia.setProbabilities(
                //Fiebre40=True,CuerpoCortado=true,TosFlemas=True,
                0.8,0.2,
                //Fiebre=True,CuerpoCortado=True,TosFlemas=False.
                0.6,0.4,
                //Fiebre40=True,CuerpoCortado=False,TosFlemas=True.
                0.7,0.3,
                //Fiebre40=True,CuerpoCortado=False,TosFlemas=False.
                0.3,7,
                //Fiebre40=False,CuerpoCortado=True,TosFlemas=True.
                0.6,0.4,
                //Fiebre40=False,CuerpoCortado=True,TosFlemas=False.
                0.1,0.9,
                //Fiebre40=False,CuerpoCortado=False,TosFlemas=True.
                0.4,0.6,
                //Fiebre40=False,CuerpoCortado=False,TosFlemas=False.
                0.01,0.99
        );
        IBayesInferer inferer = new JunctionTreeAlgorithm();
        inferer.setNetwork(Enfermedades);
        Map<BayesNode,String> evidence = new HashMap<>();
        if(sintomas[0]=="True"){evidence.put(Fiebre40, "True");}
        else{evidence.put(Fiebre40, "False");}
        if(sintomas[1]=="True"){evidence.put(CuerpoCortado, "True");}
        else{evidence.put(CuerpoCortado, "False");}
        if(sintomas[2]=="True"){evidence.put(TosFlemas, "True");}
        else{evidence.put(TosFlemas, "False");}
        inferer.setEvidence(evidence);
        double[] probabilidadPulmonia = inferer.getBeliefs(Pulmonia);//Calcula la probabilidad de pulmonia.
        return probabilidadPulmonia; 
     }
}
