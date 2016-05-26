
#!/usr/bin/env python

# Simple test script that plays (some) wav files


# Footnote: I'd normally use print instead of sys.std(out|err).write,
# but this version runs on python 2 and python 3 without conversion

import sys
import wave
import getopt
import alsaaudio
import audioop
import math
import max7219.led as led
import RPi.GPIO as GPIO    #Importamos la libreria RPi.GPIO
import time

def play(device, f):
   
    sys.stdout.write('%d channels, %d sampling rate\n' % (f.getnchannels(),
                                                          f.getframerate()))
    # Set attributes
    device.setchannels(f.getnchannels())
    device.setrate(f.getframerate())
    ma = led.matrix()
    GPIO.setmode(GPIO.BOARD)   #Ponemos la Raspberry en modo BOARD
    GPIO.setup(40,GPIO.OUT)    #Ponemos el pin 21 como salida
    p = GPIO.PWM(40,50)        #Ponemos el pin 21 en modo PWM y enviamos 50 pulsos por segundo
    p.start(7.5)               #Enviamos un pulso del 7.5% para centrar el servo
    GPIO.setup(38,GPIO.OUT)    #Ponemos el pin 21 como salida
    q = GPIO.PWM(38,50)        #Ponemos el pin 21 en modo PWM y enviamos 50 pulsos por segundo   DERECHA
    q.start(7.5)


    # 8bit is unsigned in wav files
    if f.getsampwidth() == 1:
        device.setformat(alsaaudio.PCM_FORMAT_U8)
    # Otherwise we assume signed data, little endian
    elif f.getsampwidth() == 2:
        device.setformat(alsaaudio.PCM_FORMAT_S16_LE)
    elif f.getsampwidth() == 3:
        device.setformat(alsaaudio.PCM_FORMAT_S24_LE)
    elif f.getsampwidth() == 4:
        device.setformat(alsaaudio.PCM_FORMAT_S32_LE)
    else:
        raise ValueError('Unsupported format')

    device.setperiodsize(320)
    lo  = 2000
    hi = 32000

    log_lo = math.log(lo)
    log_hi = math.log(hi)
    data = f.readframes(15000)
    while data:
        # Read data from stdin
        device.write(data)
        data = f.readframes(15000)
        vuTemp = (math.log(float(max(audioop.max(data, 2),1)))-log_lo)/(log_hi-log_lo)/2
        vu = chr(ord('a')+min(max(int(vuTemp*20),0),19))
        print vu
        if vu == 'a':
           #print "hola"
            ma.letter(0,ord('I'))
            p.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL
            q.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL  DERECHA
        if vu == 'b':
           #print "hola"
            ma.letter(0,ord('I'))
            p.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL
            q.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL  DERECHA
        if vu == 'c':
           #print "hola"
            ma.letter(0,ord('I'))
            p.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL
            q.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL  DERECHA
        if vu == 'd':
           #print "hola"
            ma.letter(0,ord('I'))
            p.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL
            q.ChangeDutyCycle(7.5)    #Enviamos un pulso del 7.5% para centrar el servo de nuevo NORMAL  DERECHA
        if vu == 'e':
           #print "hola"
            ma.letter(0,ord('D'))
            p.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derecha FELIZ
            q.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda FELIZ   DERECHA
        if vu == 'f':
           #print "hola"
            ma.letter(0,ord('D'))
            p.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derechaFELIZ
            q.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda FELIZ   DERECHA
         if vu == 'g':
           #print "hola"
            ma.letter(0,ord('D'))
            p.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derechaFELIZ
            q.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda FELIZ   DERECHA
        if vu == 'h':
           #print "hola"
            ma.letter(0,ord('D'))
            p.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derechaFELIZ
            q.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda FELIZ   DERECHA
        if vu == 'i':
           #print "hola"
            ma.letter(0,ord('C'))
            p.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda ENOJADO
            q.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derecha EMOJADO DERECHA
        if vu == 'j':
           #print "hola"
            ma.letter(0,ord('C'))
            p.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda ENOJADO
            q.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derecha EMOJADO DERECHA
        if vu == 'k':
           #print "hola"
            ma.letter(0,ord('C'))
            p.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda ENOJADO
            q.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derecha EMOJADO DERECHA
        if vu == 'l':
           #print "hola"
            ma.letter(0,ord('C'))
            p.ChangeDutyCycle(5.5)    #Enviamos un pulso del 4.5% para girar el servo hacia la izquierda ENOJADO
            q.ChangeDutyCycle(10.5)   #Enviamos un pulso del 10.5% para girar el servo hacia la derecha EMOJADO DERECHA

def usage():
    sys.stderr.write('usage: playwav.py [-c <card>] <file>\n')
    sys.exit(2)

if __name__ == '__main__':

    card = 'default'

    opts, args = getopt.getopt(sys.argv[1:], 'c:')
    for o, a in opts:
        if o == '-c':
            card = a

    if not args:
        usage()

    f = wave.open(args[0], 'rb')
    device = alsaaudio.PCM(card=card)
    play(device, f)

    f.close()