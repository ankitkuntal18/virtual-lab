## Storyboard (Round 2)

Experiment 1: carry look ahead adder

### 1. Story Outline:

Choose the input A and B. select the last digit of A and B which will be denoted as Ai and Bi. choose another input Ci (0,1). then with the help of logic gates Pi is calculated. now the array input will be generated as Gi. now the value of sum and carry will be displayed as Pi and Ci through Exclusive OR gate.


### 2. Story:

To reduce the computation time, there are faster ways to add two binary numbers by using carry lookahead adders. They work by creating two signals P and G known to be Carry Propagator and Carry Generator. The carry propagator is propagated to the next level whereas the carry generator is used to generate the output carry, regardless of input carry.
        
The number of gate levels for the carry propagation can be found from the circuit of full adder. The signal from input carry C(in) to output carry C(out) requires an AND gate and an OR gate, which constitutes two gate levels. So, if there are four full adders in the parallel adder, the output carry C5 would have 2 X 4 = 8 gate levels from C1 to C5. For an n-bit parallel adder, there are 2n gate levels to propagate through.</br></br>
step 1:</br>
![xyz](images/Screenshot (50).png)</br>




![and](mindmap/image2.jpg)</br>
<br>

#### 2.1 Set the Visual Stage Description:
Inputs are given visually to the gates. Both the inputs entered passes through the gates and performs the operation of sum and carry. Then the respective outputs are displayed visually to the user so that the user can understand the experiment properly. 

#### 2.3 Set the Pathway Activities:,

Input the four digits value in A and B. Select the respective Ai and Bi. enter the value of Ci and hence the operation is performed. Now the sum and carry is displays.

### 5. Challenges and Questions

Q1. Which one of the following is better way to compute sum in less time?</br>
a)half adder</br>
b)full adder</br>
c)n bit parllel adder</br>
d)carry lookahead adder</br>
ANS:-D</br>
Q2. Give the correct formula of Pi and Gi?</br>
a)Ai·BiandAi⊕Bi</br>
b)Ai+BiandAi.Bi</br>
c)Ai⊕BiandAi+Bi</br>
d)Ai⊕BiandAi-Bi</br>
ANS:-A</br>



### 6. Formulas and equations used :

Pi=Ai*Bi~ +Ai~ *Bi</br>
Gi=Ai*Bi</br>
Si=Pi*Ci~+Pi~*Ci</br>
C(i+1)=Gi + Pi*Ci</br>



### 7.Conclusion:
####  Study of logic gate has been done. Pi and Gi has been calculated and sum has been determined.






