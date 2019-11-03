## Pedagogy (Round 1)
<p align="center">
<br>
<br>
<b> Experiment:CARRY LOOK AHEAD ADDER  <a name="top"></a> <br>
</p>

<b>Discipline | <b>Engineering
:--|:--|
<b> Lab | <b> Information technolgy
<b> Experiment|     <b> To calculate addition of two binary numbers with the help of Carry look ahead adder
<h4> [1. Focus Area:]
<h4> [2. Instructional Strategy: ]
<h4> [3.Task & Assessment Question:]
<h4> [4. Simulator Interaction:]
<hr>

<a name="LO"></a>
#### 1. Focus Area :
Reinforce Theoretical Concept: Our experiment is all about the addition of two binary numbers. As in ripple carry adders, for each adder block, the two bits that are to be added are available instantly. However, each adder block waits for the carry to arrive from its previous block. So, it is not possible to generate the sum and carry of any block until the input carry is known. The (i)th block waits for the (i-1)th block to produce its carry. So there will be a considerable time delay which is carry propagation delay.It reduces the propagation delay by more complex hardware. It is implemented with the help of logic gates.

<br/>


<h4>1.2 Learning Objectives and Cognitive Level:</h4>

To perform the task of addition of two binary number in less time.
The usage of AND, OR and X-OR gates.
How to calculate carry generate before addition.</br>

Sr.No | Learning Objective |Cognitive Leve | Action Verb
:--|:--|:--|:--:
1.|Students will be able to explain the functioning of Carry look ahead adder.  |Understand  |Explain
2.|Make use of carry look ahead adder student will be able to create logic circuits for ALU.  |Apply |Create        
3.|Student will be able to evaluate the result of carry look ahead adder for given input as well as for using minimum gate.|Evaluate|Evaluate

<br/>


<h4>1.3 About the Experiment:</h4>

Read the theory and comprehend the concepts related to the experiment. 
<br>
<div>
 Firstly take two binary numbers to perform experiment.To get the addition take Ai and Bi digit by digit from the end. In carry look ahead adder two variables such as “carry propagate(Pi) ” and “carry generate(Gi)” are defined.After that carry (Ci) is generated with the help of Pi and Gi. The carry is stored in C(i+1) and the sum(Si) is stored in Pi.Ci .Repeat the same process till the sum of all the digits is calculated. Its complexity is log(n). 
 
</div>
<br>

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>

#### 2. Instructional Strategy:
<br>

<div>  
Expository : Using this strategy In carry look ahead adder two variables such as “carry propagate” and “carry generate” are defined. The sum is stored in Si and the carry is stored in C(i+1).

In this experiment we have used expository strategy to perform addition of two binary numbers by using minimum number of gates as well as calculate the carry generate, this carry is used for further calculation.
In this experiment we have also used problem based strategy in which 

  <h4>2.1 Instructional Strategy:</h4>  
> Select the four  digit input value in A and B</br> > Select the respective Ai and Bi</br> > Enter the value of Ci (0,1) in the respective box</br> > You will get “carry propagate” (Pi) and “carry generate” (Gi)</br> <br><h4>2.2 Assessment Method: </h4></br>For assessment method we are trying to use formative assessment in which pre test will be taken to check your knowledge and interest in the given experiment.</br> For assessment method we are trying to use summative assessment in which post test will be taken to check how efficiently you were able to perform the experiment.</br><h4> 2.3 Description of sections:</h4></br> Firstly select Ai and Bi as your inputs from A and B. In the first section two inputs Ai and Bi need to be selected which when pass through X-OR gate will result in carry propagate .The next section will have carry propagate and carry input as your inputs which will pass through second X-OR gate and which will result in Si. In third section we will have same input Ai and Bi which will pass through AND gate that will result in carry generate. In fourth section we need to calculate C(i+1) which will be generated when Pi , Cin passes through AND gate and then along with them Gi passes through OR gate. Formula used- </br>                            
Pi=Ai*Bi’ +Ai’*Bi                  ( Pi is carry propagate) </br>                            Gi=Ai*Bi                         ( Gi is carry generate)</br> 
Si=Pi*Ci’ + Pi’*Ci                 ( Si is sum) </br>                          
C(i+1) =Gi + Pi*Ci

</div>
<br>

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>
#### 3. Task & Assessment Questions:

<div>
<br>

Sr.No | Learning Objective to be met | Tasks to be performed by the students | Assessment question aligned to the task
:--|:--|:--|:--:
1.|To perform the task of addition in less time  |To use carry look ahead adder  | Which one of the following is better way to calculate sum in less time.</br> 1. n bit parallel adder </br>2. carry look ahead adder 
2.|The usage of two half adder  | How the logic gates help in calculating various parameters like Pi , Gi |Give the correct formula of Pi and Gi
3.|Students will be able to explain the functioning of Carry look ahead adder.|Students will have to simulate the experiment and go through the theory.|What is AND and OR gate?
4.|Make use of carry look ahead adder student will be able to create logic circuits for ALU.|Students can create logic diagram.|How many numbers of gates are used in experiment?
5.|Student will be able to evaluate the result of carry look ahead adder for given input as well as for using minimum gate.|Students will have to check the results on the basis of different inputs.|Evaluate the sum 1010 and 0101.

</div>



<br>

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>

#### 4. Simulator Interactions:
<br>

Sr.No | What students will do? | What Simulator will do ? | Purpose of the task
:--|:--|:--|:--:
1.| Student will click on Simulation tab | Simulator will ask for input of two binary numbe r after that input of first number(Ai),input of second number(Bi),and at last input of carry(Ci) | This will test give the resultent sum(Si)  of the experiment 
2.| Student will click on sum button in  Simulation tab | it will give the sum both binary numbers | This will give the total sum in the experiment. 
