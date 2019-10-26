## Pedagogy (Round 1)
<p align="center">
<br>
<br>
<b> Experiment:CARRY LOOKAHEAD ADDER  <a name="top"></a> <br>
</p>

<b>Discipline | <b>Engineering
:--|:--|
<b> Lab | <b> Information technolgy
<b> Experiment|     <b> To calculate addition of two binary numbers with the help of Carry look ahead adder
<h4> [1. Focus Area:]
<h4> [2. Instructional Strategy: ]
<h4> [3.Task & Asswssment Question:]
<h4> [4. simulator Interaction:]
<hr>

<a name="LO"></a>
#### 1. Focus Area :
Our experiment is all about the addition of two binary numbers. As in ripple carry adders, for each adder block, the two bits that are to be added are available instantly. However, each adder block waits for the carry to arrive from its previous block. So, it is not possible to generate the sum and carry of any block until the input carry is known. The (i)th block waits for the (i-1)th block to produce its carry. So there will be a considerable time delay which is carry propagation delay.It reduces the propagation delay by more complex hardware. It is implemented with the help of logic gates.

<br/>


<h4>1.3 Learning Objectives and Cognitive Level:</h4>

To perform the task of addition of two binary number in less time.
The usage of AND, OR and X-OR gates.
How to calculate carry generate before addition.</br>

        


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
In this section you will get to know what instructions you need to follow to perform carry look ahead adder and even this will test your knowledge as you follow the assessment method and for your reference you can look over to description section
     <h4>2.1 Instructional Strategy:</h4>  
> Select the four  digit input value in A and B</br> > Select the respective Ai and Bi</br> > Enter the value of Ci (0,1) in the respective box</br> > You will get “carry propagate” (Pi) and “carry generate” (Gi)</br> <br><h4>2.2 Assessment Method: </h4></br>Pre test will be taken to check your knowledge and interest in the following experiment.</br> Post test will be taken to check how efficiently you were able to perform the following experiment.</br><h4> 2.3 Description of sections:</h4></br> You will get to know that A and B are those values which are being selected to calculate the sum using carry look ahead adder. Here Ai is the last digit of the number A and Bi is also the last digit of number B. Formula used- </br>                            
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
#### 5. Task & Assessment Questions:

<div>
<br>

Sr.No | Learning Objective to be met | Tasks to be performed by the students | Assessment question aligned to the task
:--|:--|:--|:--:
1.|To perform the task of addition in less time  |To use carry look ahead adder  | Which one of the following is better way to calculate sum in less time 1. n bit parallel adder 2. carry look ahead adder 
2.|The usage of two half adder  | How the logic gates help in calculating various parameters like Pi , Gi |Give the correct formula of Pi and Gi




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
2.| Student will click on sum button in  Simulation tab | it will give the sum both binary numbers | This will five the total sum of  experiment. 
