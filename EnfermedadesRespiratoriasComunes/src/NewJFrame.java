/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Aivlis
 */

public class NewJFrame extends javax.swing.JFrame {

    /**
     * Creates new form NewJFrame
     */
    public NewJFrame() {
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        TosSeca = new javax.swing.JCheckBox();
        TosFlemas = new javax.swing.JCheckBox();
        CuerpoCortado = new javax.swing.JCheckBox();
        Ronquera = new javax.swing.JCheckBox();
        Temperatura38Menor = new javax.swing.JCheckBox();
        TemperaturaMayor38 = new javax.swing.JCheckBox();
        Temperatura40 = new javax.swing.JCheckBox();
        SonidoRespirar = new javax.swing.JCheckBox();
        OpresionPecho = new javax.swing.JCheckBox();
        SilvidoRespirar = new javax.swing.JCheckBox();
        jButton1 = new javax.swing.JButton();
        EscurrimientoNasal = new javax.swing.JCheckBox();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setMinimumSize(new java.awt.Dimension(650, 400));
        getContentPane().setLayout(null);

        jLabel1.setFont(new java.awt.Font("Calibri", 3, 14)); // NOI18N
        jLabel1.setText("Seleccione los sintomas");
        getContentPane().add(jLabel1);
        jLabel1.setBounds(230, 30, 180, 30);

        TosSeca.setText("Tos seca");
        getContentPane().add(TosSeca);
        TosSeca.setBounds(70, 80, 100, 23);

        TosFlemas.setText("Tos con flemas");
        getContentPane().add(TosFlemas);
        TosFlemas.setBounds(70, 120, 110, 23);

        CuerpoCortado.setText("Cuerpo cortado");
        getContentPane().add(CuerpoCortado);
        CuerpoCortado.setBounds(370, 240, 140, 23);

        Ronquera.setText("Ronquera");
        getContentPane().add(Ronquera);
        Ronquera.setBounds(70, 200, 100, 23);

        Temperatura38Menor.setText("Temperatura menor o igual a 38°");
        getContentPane().add(Temperatura38Menor);
        Temperatura38Menor.setBounds(70, 160, 220, 23);

        TemperaturaMayor38.setText("Temperatura mayor a 38°");
        getContentPane().add(TemperaturaMayor38);
        TemperaturaMayor38.setBounds(70, 240, 170, 23);

        Temperatura40.setText("Temperatura mayor o igual a 40°");
        getContentPane().add(Temperatura40);
        Temperatura40.setBounds(370, 80, 210, 23);

        SonidoRespirar.setText("Sonido al respirar");
        getContentPane().add(SonidoRespirar);
        SonidoRespirar.setBounds(370, 120, 130, 23);

        OpresionPecho.setText("Opresión en el pecho");
        getContentPane().add(OpresionPecho);
        OpresionPecho.setBounds(370, 160, 140, 23);

        SilvidoRespirar.setText("Silvido respiratorio");
        getContentPane().add(SilvidoRespirar);
        SilvidoRespirar.setBounds(370, 200, 130, 23);

        jButton1.setFont(new java.awt.Font("Tahoma", 3, 12)); // NOI18N
        jButton1.setText("Enviar");
        jButton1.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jButton1MouseClicked(evt);
            }
        });
        getContentPane().add(jButton1);
        jButton1.setBounds(260, 320, 70, 23);

        EscurrimientoNasal.setText("Escurrimiento Nasal");
        getContentPane().add(EscurrimientoNasal);
        EscurrimientoNasal.setBounds(70, 280, 140, 23);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jButton1MouseClicked
        // TODO add your handling code here:
       
        if(TosSeca.isSelected()){
           
        }
        if(TosFlemas.isSelected()){
          
        }
        if(CuerpoCortado.isSelected()){
           
        }
        if(EscurrimientoNasal.isSelected()){
            
        }
        if(OpresionPecho.isSelected()){
            
        }
        if(Ronquera.isSelected()){
            
        }
        if(SilvidoRespirar.isSelected()){
           
        }
        if(SonidoRespirar.isSelected()){
            
        }
        if(Temperatura38Menor.isSelected()){
            
        }
        if(Temperatura40.isSelected()){
           
        }
        if(TemperaturaMayor38.isSelected()){
       
        }
    }//GEN-LAST:event_jButton1MouseClicked

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new NewJFrame().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JCheckBox CuerpoCortado;
    private javax.swing.JCheckBox EscurrimientoNasal;
    private javax.swing.JCheckBox OpresionPecho;
    private javax.swing.JCheckBox Ronquera;
    private javax.swing.JCheckBox SilvidoRespirar;
    private javax.swing.JCheckBox SonidoRespirar;
    private javax.swing.JCheckBox Temperatura38Menor;
    private javax.swing.JCheckBox Temperatura40;
    private javax.swing.JCheckBox TemperaturaMayor38;
    private javax.swing.JCheckBox TosFlemas;
    private javax.swing.JCheckBox TosSeca;
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    // End of variables declaration//GEN-END:variables
}
