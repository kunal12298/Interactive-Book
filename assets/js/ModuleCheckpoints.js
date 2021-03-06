// Edit this file to add new checkpoints that are not in the book.
// If they are already in the book then you will find them here with their 
// original book numbers, copy-paste them and change the numbers according 
// the numbering used in the modules.
// Note: The ordering does not matter, this is an associative array in javascript
// If you are adding stuff make sure you follow these rules:
/*
If you need subscripts or superscripts in answers they must be in unicode:
Subscripts: (digits)
	a_x: \u208x  (where x is a digit 0-9)
If there are multiple digits(xy) in the subscript:
	<sub>xy</sub> say
then
	replace with \u208x\u208y	
Superscripts: (digits)
	a^1: \u00B9
	a^2: \u00B2
	a^3: \u00B3
	a^0: \u2070 
	a^4-9: \u207x (x is a digit 4 to 9)
Also:
	Pi is \u03C0
	Ohm is \u03A9
Answers on multiple lines: use \n\t at line ending
*/
function popitup(chkpt) {
var cps= {"Checkpoint3_1":'Checkpoint 3.1: Ohm\'s Law R=V/I = 1V/0.005A = 200\u03A9.',
"Checkpoint2_1":'Checkpoint 2.1: Add the powers of 2 for each digit that is 1: 1*2\u2077+1*2\u2076+1*2\u2075+1*2\u2074+1*2\u00B3+1*2\u00B2+1*2\u00B9+1*2\u2070  = 255',
"Checkpoint2_2":'Checkpoint 2.2: 15*16+15 = 255',
"Checkpoint2_3":'Checkpoint 2.3: First, divide the binary into 4-bit nibbles, then convert the two 4-bit nibbles: 0100\u2082=0x4 and  0101\u2082=0x5. Third, combine the two hex digits into one number 0x45.',
"Checkpoint2_4":'Checkpoint 2.4: First, divide the binary into 4-bit nibbles, then convert the three 4-bit nibbles: 1100\u2082=0xC, 1010\u2082=0xA and 1011\u2082=0xB. Third, combine the three hex digits into one number 0xCAB',
"Checkpoint2_5":'Checkpoint 2.5: First, convert the two 4-bit nibbles: 0x4=0100\u2082 and  0x0=0000\u2082. Second, combine the 8 binary bits into one binary number  01000000\u2082',
"Checkpoint2_6":'Checkpoint 2.6: First, convert the three 4-bit nibbles: 0x6=0110\u2082, 0x3=0011\u2082 and  0xF=1111\u2082. Second, combine the 12 binary bits into one binary number 011000111111\u2082',
"Checkpoint2_7":'Checkpoint 2.7: Four binary bits are required for each hex digit. 4*6 is 24 bits.',
"Checkpoint2_8":'Checkpoint 2.8: There are 8 bits/byte, so 50 bits will take 50/8 = 6.25, or 7 bytes of memory.',
"Checkpoint2_9":'Checkpoint 2.9: 0*2\u2077+1*2\u2076+1*2\u2075+0*2\u2074+1*2\u00B3+0*2\u00B2+0*2\u00B9+1*2\u2070  = 64+32+8+1 = 105',
"Checkpoint2_10":'Checkpoint 2.10: 5*16+4 = 80+4 = 84',
"Checkpoint2_11":'Checkpoint 2.11: We start by setting the running total to the number we wish to convert. We start with the basis element associated with the MSB and work towards the basis element for the LSB. We must also subtract basis elements from the running total as we determine they are needed. If the basis element in question is less than or equal to the running total, then we need that basis element.',
"Checkpoint2_12":'Checkpoint 2.12: Combine binary basis elements to create the desired value. 45=32+8+4+1, so 45 = 00101101\u2082 = 0x2D.',
"Checkpoint2_13":'Checkpoint 2.13: Combine binary basis elements to create the desired value. 200=128+64+8, so 200 = 11001000\u2082 = 0xC8.',
"Checkpoint2_14":'Checkpoint 2.14: Combine signed binary basis elements to create the desired value. -128+64+16+8+2 = -38.',
"Checkpoint2_15":'Checkpoint 2.15: They are different, because bit 7 is one.',
"Checkpoint2_16":'Checkpoint 2.16: Combine signed binary basis elements to create the desired value. -54 = -128+64+8+2 = 11001010\u2082 = 0xCA.',
"Checkpoint2_17":'Checkpoint 2.17: Because the range of 8-bit signed numbers is -128 to +127.',
"Checkpoint2_18":'Checkpoint 2.18: 2\u00B3\u00B2 is 4 times 2\u00B3\u00B0, and 2\u00B3\u00B0 is about a billion, so 2\u00B3\u00B2 is about 4 billion.',
"Checkpoint2_19":'Checkpoint 2.19: 8192+64+32+8+2=8298.',
"Checkpoint2_20":'Checkpoint 2.20: 1*4096+2*256+3*16+4=4660.',
"Checkpoint2_21":'Checkpoint 2.21: 1234 = 4*256+13*16+2 = 0x04D2.',
"Checkpoint2_22":'Checkpoint 2.22: 10000 = 8192+1024+512+256+16 = 0010011100010000\u2082.',
"Checkpoint2_23":'Checkpoint 2.23: 1*4096+2*256+3*16+4 = 4660.',
"Checkpoint2_24":'Checkpoint 2.24: -32768 + 2*4096+11*256+12*16+13 = -21555.',
"Checkpoint2_25":'Checkpoint 2.25: 1234 = 4*256+13*16+2 = 0x04D2.',
"Checkpoint2_26":'Checkpoint 2.26: -10000 = -32768 +16384+4096+2048+128+64+32+16 = 1101100011110000\u2082.',
"Checkpoint2_27":'Checkpoint 2.27: An embedded system is a microcomputer with mechanical, chemical, or electrical devices attached to it, programmed for a specific dedicated purpose, and packaged up as a complete system.',
"Checkpoint2_28":'Checkpoint 2.28: A microcomputer is a small computer that includes a processor, memory and I/O devices.',
"Checkpoint2_29":'Checkpoint 2.29: Typical input devices include the keys on the keyboard, mouse and its buttons, touch pad, DVD reader, and microphone. USB drives, Ethernet, and wireless can be used for input and output.',
"Checkpoint2_30":'Checkpoint 2.30: Typical output devices include the LEDs on the keyboard, monitor, speaker, printer, DVD burner, and speaker. USB drives, Ethernet, and wireless can be used for input and output.',
"Checkpoint2_31":'Checkpoint 2.31: A microprocessor is a small processor. A microcomputer is a small computer that includes a processor, memory and I/O devices. A microcontroller is a single chip computer.',
"Checkpoint2_32":'Checkpoint 2.32: Flash ROM is higher density because it requires few transistors compared to RAM.',
"Checkpoint2_33":'Checkpoint 2.33: The addressing mode defines the format for the effective address for that instruction. In other words, it defines how the instruction will access the data it needs.',
"Checkpoint2_34":'Checkpoint 2.34: 0x2000.0008, R3 is not changed.',
"Checkpoint2_35":'Checkpoint 2.35: 0x2000.0000, and 8 is added to R3, it becomes 0x2000.0008.',
"Checkpoint3_2":'Checkpoint 3.2: Ohm\'s Law I=V/R = 2V/100\u03A9 = 20mA.',
"Checkpoint3_3":'Checkpoint 3.3: Theoretically, the current will be infinite, but practically there will be sparks.',
"Checkpoint3_4":'Checkpoint 3.4: Resistance is effort over flow = Newtons/m\u00B2/ (m\u00B3/sec) = Newtons-sec/m.',
"Checkpoint3_5":'Checkpoint 3.5: Resistance is effort over flow = \u2070C/ watts.',
"Checkpoint3_6":'Checkpoint 3.6: Power is V*I = 1V*0.005A = 5 mW.',
"Checkpoint3_7":'Checkpoint 3.7: Power is V\u00B2/R = 2V*2V/100\u03A9 = 40 mW.',
"Checkpoint3_8":'Checkpoint 3.8: Power is I\u00B2*R = (0.09A)*(0.09A)*100\u03A9 = 0.81W.',
"Checkpoint3_9":'Checkpoint 3.9: Energy is power*time, so 1000J = 0.81W*t(in sec), so t = 1000/0.81=1234 sec, which is about 20 minutes.',
"Checkpoint3_10":'Checkpoint 3.10: Total resistance is 2k\u03A9 +3k\u03A9 = 5k\u03A9. Ohm\'s Law V=I*R = 0.001A*5000\u03A9 = 5V.',
"Checkpoint3_11":'Checkpoint 3.11: Total resistance is 2k\u03A9+3k\u03A9=5k\u03A9. I is 10V/5k\u03A9=2mA. V\u2082 =I*R\u2082 = 0.002A*3000\u03A9 = 6V.',
"Checkpoint3_12":'Checkpoint 3.12: Total resistance is 2000*4000/(2000+4000)=1333\u03A9. V =I*R = 0.001A*1333\u03A9 = 1.333V.',
"Checkpoint3_13":'Checkpoint 3.13: Ohm\'s Law I\u2082=V/R\u2082 = 10V/4000\u03A9 = 2.5mA',
"Checkpoint4_1":'Checkpoint 4.1: Binary means it has two states.',
"Checkpoint4_2":'Checkpoint 4.2: The smallest 8-bit unsigned integer is 0 (all low). The largest 8-bit unsigned integer is 255 (all high).',
"Checkpoint4_3":'Checkpoint 4.3: The smallest 8-bit signed integer is -128 (0x80) and the largest 8-bit signed integer is 127 (0x7F).',
"Checkpoint4_4":'Checkpoint 4.4: There are 256 possibilities represented by 8-bit data.',
"Checkpoint4_5":'Checkpoint 4.5: B will be 0x20 if bit 5 of A is 1, and will be 0x00 if bit  5 of A is 0. \n\t Since B is Boolean, B will be true if and only of bit 5 of A is 1.',
"Checkpoint4_6":'Checkpoint 4.6: The value 0xDF has bit 5 low, and other bits high. The AND with 0x20 will clear bit 5 of C.',
"Checkpoint4_7":'Checkpoint 4.7: The OR with 0x20 will set bit 5 of D.',
"Checkpoint4_8":'Checkpoint 4.8: Since ~0x20 is equal to 0xDF, they are the same. The second is a clearer way to signify clear bit 5.',
"Checkpoint4_9":'Checkpoint 4.9: 100+50=150 with no overflow, so carry=0.',
"Checkpoint4_10":'Checkpoint 4.10: 255+2=257, so there is overflow. The result will be 0x01 and the carry=1.',
"Checkpoint4_11":'Checkpoint 4.11: With switches it means a closed switch reads as a 0 and open switch reads as a 1;\n\t With LEDs it means writing a 1 turns the LED off and writing a 0 turns it ON. With digital signals, negative logic is defined as the true state having a lower voltage than the false state.',
"Checkpoint5_1":'Checkpoint 5.1: unsigned char has a range of 0 to 255.',
"Checkpoint5_2":'Checkpoint 5.2: signed char has a range of -128 to 127. In many compilers it is ok to specify just char, and it will assume it is signed.',
"Checkpoint5_3":'Checkpoint 5.3: short has a range of -32768 to +32767.',
"Checkpoint5_4":'Checkpoint 5.4: unsigned long has a range of 0 to about 4 billion (4294967295).',
"Checkpoint5_5":'Checkpoint 5.5: The range of values possible with a C data type of int depends on your compiler. The Keil computer uses 32 bits, so the range will be about -2 billion to +2 billion (2147483648 to 2147483647).',
"Checkpoint5_6":'Checkpoint 5.6:   (x&1)&&((y+1)<(z*4));',
"Checkpoint5_7":'Checkpoint 5.7:   If there is one input parameter, it means the caller will create one value and pass it into the function at the time the function is being called.',
"Checkpoint5_8":'Checkpoint 5.8:   If there is one output parameter, it means the function will generate one value during execution and return it back to the caller when the function finishes. Normally, the caller will store that return value into a variable. However, the caller does not have to store the return value.',
"Checkpoint6_1":'Checkpoint 6.1: Nothing happens if the software writes to an input port.',
"Checkpoint6_2":'Checkpoint 6.2: If the software reads this output port it gets the values last written to the port. For example, if the user mistakenly grounded the output pin (very bad thing to do), and the software writes a \'1\'; when it reads it will get \'1\'.',
"Checkpoint6_3":'Checkpoint 6.3: Since there are as many bits in a port as there are bits in the direction register, each bit can be individually programmed as input or output.',
"Checkpoint6_4":'Checkpoint 6.4: First, write a 0x00000002 to the clock register to activate Port B. Second, change all the labels PORTF to PORTB (change all 0x40025 to 0x40005). If it is an LM3S microcontroller, remove steps 2, 3, and 4.',
"Checkpoint6_5":'Checkpoint 6.5: Nothing happens. Since none of the address bits are selected, none of the port bits are affected.',
"Checkpoint6_6":'Checkpoint 6.6: The base address for Port A is 0x4000.4000.\n\t #define PA71  (*((volatile unsigned long *)0x40004208))\n\t PA71 = 0x82; // sets PA7 PA1, other 6 bits are not affected',
"Checkpoint6_7":'Checkpoint 6.7: The base address for Port B is 0x4000.5000.\n\t #define PB610 (*((volatile unsigned long *)0x4000510C))\n\t PB610 = 0x43; // sets PB6 PB1 PB0, other 5 bits are not affected',
"Checkpoint7_1":'Checkpoint 7.1: Both terms refer to parameters of a system, but the differences lie in the level of detail used to describe the parameter. A requirement is usually defined in general terms, whereas a specification entails detailed engineering rigor. A requirement often refers to an objective of the system, while a specification describes how well the actual device works.',
"Checkpoint7_2":'Checkpoint 7.2: It failed because employees were rewarded for poor behavior. It is much better to punish poor behavior and reward good behavior.',
"Checkpoint7_3":'Checkpoint 7.3: Call by value passes a copy of the data itself, while call by reference passes an address or pointer to the original data. If the calling program modifies a call by value parameter, the original data is not changed. However if a calling program modifies a call by reference parameter, the original data is changed.',
"Checkpoint7_4":'Checkpoint 7.4: Coupling can be parameters passed, shared globals, functions called, and shared I/O devices. It is measured in bytes/sec transferred from one module to the other.',
"Checkpoint7_5":'Checkpoint 7.5: if(N==10){isTen();}',
"Checkpoint7_6":'Checkpoint 7.6: if(H1==H2){isEqual();}',
"Checkpoint7_7":'Checkpoint 7.7: if(N<0){isNeg();}',
"Checkpoint7_8":'Checkpoint 7.8: if(N>65535){N=65535;}',
"Checkpoint7_9":'Checkpoint 7.9: \nunsigned char Convert(unsigned char letter){\n\t if((letter<\'a\')||(letter>\'z\')){\n\t\t return letter;\n\t  } \n\t else{\n\t\t return (letter-0x20);\n\t  }\n}',
"Checkpoint7_10":'Checkpoint 7.10: while(N&0x01){body();}',
"Checkpoint7_11":'Checkpoint 7.11: // toggle PF3 while PF4 and PF0 are high\n do{\n\t PF3 = PF3^0x08;\n} while((PF4==0x10)&&(PF0==0x01));',
"Checkpoint7_12":'Checkpoint 7.12: // toggle PF2 one million times\n void Toggle(void){unsigned long count;\n\t for(count=0; count<1000000; count++){\n\t\t PF2 = PF2^0x04;\n\t}\n}',
"Checkpoint8_1":'Checkpoint 8.1: \n3.3 - 1.7 - 1*R - 0.5 = 0\n => R = 0.1k\u03A9 = 100\u03A9',
"Checkpoint8_2":'Checkpoint 8.2: \n3.3 - 1.7 - 2*R - 0.4 = 0\n => R = 0.6k\u03A9 = 600\u03A9',
"Checkpoint9_1":'Checkpoint 9.1: In general, the presence of a minimally intrusive debugging instrument itself only has minimal effect on the parameter being measured. One criterion is the total execution time required to perform the instrumentation is small compared to the execution times of the original target operation.',
"Checkpoint9_2":'Checkpoint 9.2: Runtime debugging can be activated in final production systems. Runtime debugging is quicker to activate/deactivate because an edit/assemble/download cycle is not needed. Assembly-time debugging produces a final production system that runs faster and requires less memory.',
"Checkpoint9_3":'Checkpoint 9.3: We are sure we debugged the exact system that is being manufactured. The debugging statements can be used to evaluate the proper operation of systems before they are shipped. The instruments can also be used to diagnose and repair systems.',
"Checkpoint9_4":'Checkpoint 9.4: The longest time is 2\u00B2\u2074 * 20ns is 335.5ms.',
"Checkpoint10_1":'Checkpoint 10.1: Change the specification from 16 MHz to 8 MHz. Change the line\n\t  SYSCTL_RCC_R +=  0x00000540;   // 10101, configure for 16 MHz crystal\n\tto\n\t  SYSCTL_RCC_R +=  0x00000380;   // 01110, configure for 8 MHz crystal  \n\tChange the specification from divide by 5 to divide by 8. Change the line\n\t  SYSCTL_RCC2_R += (4<<22);      // configure for 80 MHz clock\n\tto\n\t  SYSCTL_RCC2_R += (7<<22);      // configure for 50 MHz clock',
"Checkpoint10_2":'Checkpoint 10.2: The maximum delay is 2\u00B3\u00B2 * 10ms, which is about 500 days.',
"Checkpoint10_3":'Checkpoint 10.3: To make it easier to understand.',
"Checkpoint10_4":'Checkpoint 10.4: Speed = (1 rotation/36 steps)*(1000ms/s)*(60sec/min)*(1step/50ms) = 33.3 RPM',
"Checkpoint10_5":'Checkpoint 10.5: Change the 50ms to 10ms, and it will spin 5 times faster.\n\tSpeed = (1 rotation/200 steps)*(1000ms/s)*(60sec/min)*(1step/10ms) = 30 RPM',
"Checkpoint10_6":'Checkpoint 10.6: Yes and no. \"A robot must obey the orders given to it by human beings, except where such orders would conflict with the First Law.\" This robot does exactly what its human programmer tells it to do. But it does not obey verbal orders given to it like the robots in Asimov\'s books.',
"Checkpoint11_1":'Checkpoint 11.1: There is 1 byte of data per 10 bits of transmission. So, there are 100 bytes/sec.',
"Checkpoint11_2":'Checkpoint 11.2: divider = 0010.100000\u2082. or 2 plus 32/64 = 2.5. The baud rate is 10MHz/2.5/16 which is 250 kHz.',
"Checkpoint11_3":'Checkpoint 11.3: 50,000,000/38400/16 is 81.3802, which is similar to 81 and 24/64. UART0_IBRD_R is 81 UART0_FBRD_R is 24. The baud rate is 50MHz/(81+24/64)/16 which is 38402 bits/sec.',
"Checkpoint11_4":'Checkpoint 11.4: RXFE is set and cleared by hardware. It means receive FIFO empty. To make it 0 means to put data into the FIFO. Software cannot clear this flag. An incoming UART frame will clear RXFE.',
"Checkpoint11_5":'Checkpoint 11.5: TXFF is set and cleared by hardware. It means transmit FIFO full. To make it 0 means to get data from the FIFO. Software cannot clear this flag. An outgoing UART frame will clear TXFF.',
"Checkpoint11_6":'Checkpoint 11.6: The data will be received in error (values will not be correct). The receiver could appear to get two input frames for every one frame transmitted. It will probably cause framing errors (FE). It would cause parity errors if active.',
"Checkpoint11_7":'Checkpoint 11.7: The data will be received in error (values will not be correct). The receiver will appear to get one input frame for every one frame transmitted. It will probably not cause framing errors (FE). It would cause parity errors if active.',
"Checkpoint11_8":'Checkpoint 11.8: 10,000,000/115200/16 is 5.4253, which is similar to 5 and 27/64. UART0_IBRD_R is 5 UART0_FBRD_R is 27. The baud rate is 10MHz/(5+27/64)/16 which is 115274 bits/sec.',
"Checkpoint11_9":'Checkpoint 11.9: Setup time is the time before a clock input data must be valid. Hold time, the time after a clock input data must continue to be valid.',
"Checkpoint12_1":'Checkpoint 12.1: Trigger flag set by hardware; the device is armed by software; the device is enabled for interrupts in the NVIC; the processor is enabled for interrupts (PRIMASK I bit is clear); the interrupt level must be less than the BASEPRI. The order of these conditions does not matter.',
"Checkpoint12_2":'Checkpoint 12.2: The processor is enabled for interrupts by clearing the I bit in the PRIMASK. Execute\n\t          CPSIE  I',
"Checkpoint12_3":'Checkpoint 12.3: Instruction is finished; registers R0-R3, R12, LR, PC, and PSR are pushed; LR is set to 0xFFFFFFF9; IPSR is set to the interrupt number being processed; PC is set with interrupt vector address. The last three steps can occur in any order.',
"Checkpoint12_4":'Checkpoint 12.4: From Program 12.1 or Table 12.1 we see the vector is 32 bits at 0x0000003C. The standard name of the interrupt handler is SysTick_Handler.',
"Checkpoint12_5":'Checkpoint 12.5: Negative logic means when we touch the switch the voltage goes to 0 (low). Formally, negative logic means the true voltage is lower than the false voltage. Positive logic means when we touch the switch the voltage goes to +3.3 (high). Formally, positive logic means the true voltage is higher than the false voltage.',
"Checkpoint12_6":'Checkpoint 12.6: For PA2, we need input with pull-up. DIR bit 2 is low (input), AFSEL bit 2 is low (not alternate), PUE bit 2 high (pull-up) and PDE bit 2 low (not pull-down). For PA3, we need input with pull-down. DIR bit 3 is low (input), AFSEL bit 3 is low (not alternate), PUE bit 3 low (no pull-up) and PDE bit 3 high (pull-down).',
"Checkpoint13_1":'Checkpoint 13.1: Because the frequency components of the wiggles are higher than \u00BD the sampling rate. The Nyquist Theorem is violated.',
"Checkpoint13_2":'Checkpoint 13.2: Because temperatures above 31 \u2070C are beyond the range, which is defined in this example as 0 to 31 \u2070C.',
"Checkpoint13_3":'Checkpoint 13.3: If the sampling rate is 1000 Hz, according to the Nyquist Theorem, the digital data can reliably represent frequencies from 0 to 500 Hz.',
"Checkpoint13_4":'Checkpoint 13.4: According to the Nyquist Theorem we would have to output to the DAC at 22 kHz.',
"Checkpoint13_5":'Checkpoint 13.5: 2.5V/256 is about 0.01 V or 10 mV.',
"Checkpoint13_6":'Checkpoint 13.6: 2V/1mV is 2000 alternatives. This is about 11 bits.',
"Checkpoint13_7":'Checkpoint 13.7: Q2 is connected to 10 k\u03A9, Q1 is connected to 20 k\u03A9 and Q0 is connected to 40 k\u03A9, the other ends of the resistors are connected together. Any three resistors with a 1/2/4 ratio would be ok.',
"Checkpoint13_8":'Checkpoint 13.8: A larger magnetic field means a larger force on the coil, which means it can generate a louder sound. There are some exceptions to the rule of heavier magnet means louder sound. For example Bose speakers can generate loud sounds without the heavy weight of a large magnet.',
"Checkpoint14_1":'Checkpoint 14.1: Approximating the 12-bit ADC is linear, either Dout = 4096*Vin/3 or 4095*Vin/3 = 2048.',
"Checkpoint14_2":'Checkpoint 14.2: Approximating the 12-bit ADC is linear, either Dout = 4096*Vin/3 or 4095*Vin/3 = 683.',
"Checkpoint15_1":'Checkpoint 15.1: A conflict will occur if the modules had unfriendly access to the direction register, enable register or data register.',
"Checkpoint15_2":'Checkpoint 15.2: According to the Nyquist Theorem we can oscillate it 15 times/sec.',
"Checkpoint15_3":'Checkpoint 15.3: According to the Nyquist Theorem we can faithfully represent sounds from 0 to 5.5 kHz.',
"Checkpoint16_1":'Checkpoint 16.1: This is full duplex, so data can flow in both directions. Each channel can transmit 11,520 bytes/sec. Since there are two channels, the network communicates up to 23,040 bytes/sec.',
"Checkpoint16_2":'Checkpoint 16.2: In a direct communication network each pair of machines requires a separate cable. A 100-machine network would require 100*99/2=4950 cables.',
"Checkpoint16_3":'Checkpoint 16.3: Every 1us, there can be 100 bytes transferred. So, the bandwidth is 100bytes/us, or 100 Mbytes/sec.',
"Checkpoint16_4":'Checkpoint 16.4: TCP is connection-based and reliable meaning no loss. UDP is connectionless, unreliable, but fast.',
"Checkpoint16_5":'Checkpoint 16.5: The Internet Group Management Protocol (IGMP) is a communications protocol used by hosts and adjacent routers on IP networks to establish multicast group memberships.',
"Checkpoint16_6":'Checkpoint 16.6: The internet is a modular and layered system having hardware layers on the bottom, hardware/software layers in the middle and application software layers at the top. See Figure 16.7.',
"Checkpoint16_7":'Checkpoint 16.7: A thing is an embedded system with inputs and outputs performing a dedicated function.',
"Checkpoint16_8":'Checkpoint 16.8: Evolution means change. So we should expect the way in which we connect to the internet to change. We should expect how microcontrollers connect to the internet to change. For example, new microcontrollers will include wifi-enabled I/O ports built into the chip itself, meaning the CC3100 booster pack will be soon obsolete.',
"Checkpoint16_9":'Checkpoint 16.9: 2\u00B3\u00B2 - 2\u00B2\u2074 - 2 \u00B2\u2070- 2\u00B1\u2076 is still about 2\u00B3\u00B2. It is 4,277,075,968 addresses.',
"Checkpoint16_10":'Checkpoint 16.10: IPv6 has 128-bit addresses and IPv4 has 32-bit IP addresses.',
"Checkpoint16_11":'Checkpoint 16.11: The CC3100 interface will fail because the analog signal is also connected to PB6, which is the MISO data line for the TM4C123-CC3100 SSI communication.',
"Checkpoint16_12":'Checkpoint 16.12: A socket is an application endpoint for communication that encapsulates IP address, the transport protocol and the port.',
"Checkpoint16_13":'Checkpoint 16.13: A port is a software construct. It is part of communications endpoint. A port together with an IP address and the protocol type constitutes a socket. A port is a 16-bit number, commonly known as the port number. Port number 80 is commonly used on servers that provide HTTP web pages.'

};
alert(cps[chkpt]);
}
