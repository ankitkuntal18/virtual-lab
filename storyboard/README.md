## Storyboard (Round 2)

Experiment 1: Carry Look Ahead Adder

### 1. Story Outline:

When user wants to calculate the addition of two binary numbers then the best way through which user can calculate the addition operation in less time using Carry Look Ahead Adder. In carry look ahead adder generally two inputs are being taken as Ai and Bi from A and B respectively. There is also a third input which is Cin which has value either 0 or 1. When these inputs are processed through XOR and AND gate they help in evaluating the value of sum (Pi) and carry (Gi) respectively. Then with the help of the three inputs (Pi , Cin , Gi), next carry C(i+1) will be calculated.

![xys](images/100.jpg)
)
### 2. Story:

In the following experiment firstly the main idea is to get the result of the addition operation in less time. Thus for having result in less time delay, user will choose the carry look ahead adder. In this the  user will give 4 bit inputs each for A and B through which he/she will get the value of Ai and Bi as their main inputs and when these inputs first pass through XOR gate carry propagate (Pi) will be evaluated. Now Ai and Bi passes through AND gate and get the value of carry generate (Gi). The resultant value of Pi and carry input helps user to calculate sum and when the same value of Pi and Ci passes through AND gate and then along with carry Gi passes through OR gate. The total number of bits being entered by the individual will repeat the process that number of time to get the desired output. For easy outlook of the experiment, student will take the reference of truth table. Result of addition operation will be generated below the table.  
![xyz](images/200.png)
![xys](images/Table.png)
        
The number of gate levels for the carry propagation can be found from the circuit of full adder. The signal from input carry C(in) to output carry C(out) requires an AND gate and an OR gate, which constitutes two gate levels. So, if there are four full adders in the parallel adder, the output carry C5 would have 2 X 4 = 8 gate levels from C1 to C5. For an n-bit parallel adder, there are 2n gate levels to propagate through.</br></br>
step 1:
![xyz](images/abc.png)
</br>
step 2:
![kkk](images/qwe.png)
</br>
step:
![ppp](images/asd.png)




<br>

#### 2.1 Set the Visual Stage Description:
Part 1: a. Visualize the input label “Input the value of Ai” and “Input the value of Bi” on screen and select the values of Ai and Bi by clicking on drop down list of Ai and Bi in first part. 
b. After that, canvas will appear on which “Draw Logic Diagram” heading is mentioned. It displays:- User has to design a carry look ahead adder on the canvas with the use of the given objects below the canvas. The objects which are present in form of buttons below the canvas are:
1. Ai: First takes one bit input: In Ai, if 1 is selected then wire will appear green and if 0 is selected then wire will appear red. 
2. Bi: first takes one bit input: In Bi, if 1 is selected then wire will appear green and if 0 is selected then wire will appear red. 
3. AND gate
4. OR gate
5. X-OR gate
6. Connector: Two buttons will be displayed like
a. Connection 1 for connections of the two X-OR gate
b. Connection 2  for connections of the two AND gate and one OR gate

So this is all about the buttons present below the canvas and now to create carry look ahead adder for having any gate on the canvas. Student has to click on that particular button below the canvas, Gate and connections will automatically appear in canvas. 
Part 2: Click on next button student will move to next screen where student will visualize the heading “Image of Carry Look Ahead Adder” after that student has to click on “Display of CLA” button. The image of 4 bit carry look ahead adder will display on the screen, through which student will visualize the inputs. 
Part 3: a. Student will visualize the heading “Truth table of Carry Look Ahead Adder”.
b. A table will appear which will contain the following labels of Ai, Bi, Pi, Gi, Si and C(i+1).
c. A sum button will be present below the table. Student has to click on SUM button. By clicking on this the total sum will be generated.
SECTION 2: Scroll the screen for checking the students understanding on CLA.
a.	Student will visualize the assessment questions related to CLA.
b.	Student will visualize the questions by clicking on buttons mentioned below.
1.	Click on Button (Question 1)
2.	Click on Button (Question 2)
c.	Text boxes for putting answers of question will appear in screen. Then student has to click on submit button for submitting his/her answers. 
d.	If student gets correct answer, a pop-up message will appear “Correct Attempt” else “Wrong Attempt”. 
 
![and](mindmap/image2.jpg)</br>

### 2.2 Set User Objectives & goals:

The main objectives of carry look ahead adder are: 
1. Sketch logic diagram of Carry look-ahead adder. 
2. Explain the functioning of Carry look-ahead adder.
3. Examine the working of Carry look-ahead adder for the different inputs.
4. Evaluate the sum and carry.	
5. Inspect the knowledge of student by assessment of Carry look-ahead adder.

#### 2.3 Set the Pathway Activities:,

Step 1: Before starting the simulator student has to overview the theory and procedure of carry look ahead adder.
Step 2: Simulator has two sections. 
First section:- In first part user will perform following activities:
1.	Click on Ai and Bi drop down menu to select 4 bits number from given 16 values.
2.	Select various gates by clicking on the buttons below the canvas to design logic diagram of Carry Look ahead adder. 
3.	Student will take one bit as input in Ai and Bi from LSB side, if 1 is selected then will appear green and if 0 is selected then wire will appear red. 
In second part user will perform following activities:
1.	Student will click on the “Display of CLA” button. 
2.	By clicking on this button a image will appear in which inputs entered by the user will be displayed, this will contain values of Ai, Bi, Pi, Gi, Ci, Si, C(i+1). Where i value lies from the number of bit inputs taken by the user. 
3.	The initial value of Ci is zero.
In third part user will perform following activities: 
1.	The individual will have overview of all the values entered by the user and all the results evaluated from the given inputs in the form of truth table. 
2.	In this table student will observe the values of Ai, Bi, Pi, Gi, Si, C(i+1). As the inputs will be entered the values will be displayed.
Second section: In second part user will perform following activities:
Scroll the screen for checking the students understanding on CLA where student will visualize the assessment questions related to CLA. Student will solve the questions on your notepads and for writing answers on respective text boxes. Simulator will match user answers. If student gets correct answer, a pop-up message will appear “Correct Attempt” else “Wrong Attempt”. 


### 2.4 Set Challenges and Questions/Complexities/Variations in Question:

1. Which gate is used to calculate carry generate?
 a) OR
 b) AND
 c) NAND
 d) X-OR
2. Full adder can be implemented by
 a) 1 half adder and 2 OR gate
 b) 3 half adder and 1 OR gate
 c) 2 half adder and 2 OR gate
 d) 2 half adder and 1 OR gate
3. Which value of A and B is taken as Ai and Bi in first input respectively?
 a) Last digit, First digit
 b) First digit, Last digit
 c) Last digit, Last digit
 d) First digit, First digit
4. ........ is the substitute of n-bit parallel adder
 a) Four bit parallel adder
 b) Full adder
 c) Carry look ahead adder
 d) None of these
5. Which operation is basically being performed using carry look ahead adder?
 a) Addition
 b) Subtraction
 c) Multiplication
 d) Division

ANS 1:-B</br>
ANS 2:-D</br>
ANS 3:-C</br>
ANS 4:-C</br>
ANS 5:-A</br>

### 2.5  Allow pitfalls:

When student deals with entering the values in truth table and if he\she enters a wrong value of Ai and Bi. Than for that particular input the current box will appear red for wrong input. The red Color here symbolizes here as a hint.

###2.6 Cunclusion:

From the above experiment of carry look ahead adder student concludes the operations of addition being performed in less time and even students get to know how Gi, Pi, Si and C(i+1) with the use of different gates(AND, OR, X-OR). 
In the following experiment student will visually come across different logic gates (AND, OR and XOR) also visually see their uses to calculate various parameters such as Ci, Pi, C(i+1) and sum by taking different binary values of Ai , Bi and Ci. Student will even visually connect different gates with the use of other objects to evaluate the result.



### 2.7 Formulas and equations used :

 Formula used-
                             Pi=Ai*Bi’ +Ai’*Bi              (Pi is carry propagate)
                             Gi=Ai*Bi                             (Gi is carry generate)
                             Si=Pi*Ci’ +Pi’*Ci               (Si is sum)
                             C(i+1) = Gi + Pi*Ci        
Example: 
A = 1011             
B = 1010
Cin = 0
Formulae Used:
  1) Pi = Ai*Bi' + Ai'*Bi
  2) Gi = Ai*Bi
  3) C(i+1) = Gi + Pi*Ci
  4) Si = Pi*Ci' + Pi'*Ci

                                            S0 = P0*C0' + P0'*C0
   C0=0                                     S0 = 1*1 + 0*0
                                            S0 = 1

  C1 = P0*C0 + G0                           S1 = P1*C1' + P1'*C1
  C1 = 1*0 + 0                              S1 = 0*1 + 1*0
  C1 = 0                                    S1 = 0

  C2 = P1*C1 + G1                           S2 = P2*C2' + P2'*C2
  C2 = 0*0 +1                               S2 = 0*0 +1*1
  C2 = 1                                    S2 = 1

  C3 = P2*C2 + G2                          S3 = P3*C3' + P3'*C3
  C3 = 0*1 + 0                             S3 = 0*1 + 1*0
  C3 = 0                                   S3 = 0

  C4 = P3*C3 + G3                        
  C4 = 0*0 +1
  C4 = 1
      
      TOTAL SUM = C4 S3 S2 S1 S0
      TOTAL SUM = 10101                    

### 3 Flowchart:

 


###  Study of logic gate has been done. Pi and Gi has been calculated and sum has been determined.






