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
#### 1.1 Focus Area :
Our focus area is based on Reinforce Theoretical Concept with experimentation in which we will demonstrate working of the 4 bit carry look-ahead adder and perform experimentation on same. It will work with the help of logic gates like AND, OR, XOR etc.





 #### 1.2 About the Experiment:

Our experiment is all about carry look-ahead adde for each adder block for which the two inputs are added. In carry look-ahead adder two variables such as “carry propagate” and “carry generate” are defined. The sum is stored in Si and the carry is stored in C(i+1). Boolean functions are implemented for carry output such as C2, C3 and C4 then generated. Its complexity is log(n). It reduces the propagation delay by more complex hardware. It is implemented with the help of logic gates such as XOR, AND and OR. Finally we will draw the logic diagram with truth table of different inputs as well as show the time complexity, Delay and Boolean expression of sum and carry output. 



#### 1.3 Learning Objectives and Cognitive Level:

To perform the task of addition of two binary number in less time.
The usage of AND, OR and X-OR gates.
How to calculate carry generate before addition.</br>

Sr.No | Learning Objective |Cognitive Level | Action Verb
:--|:--|:--|:--:
1.|Student will be able to sketch logic diagram of Carry look-ahead adder.   |Understand  |Sketch
2.|Students will be able to explain the functioning of Carry look-ahead adder.|Understand |Explain        
3.|Student will be able to examine the working of Carry look-ahead adder for the different inputs.|Analyze|Examine
4.|Student will be able to analyze delay of Carry look-ahead adder.|Analyze|Analyze
5.|Make use of XOR, AND and OR logic gates to evaluate the sum and carry.|Analyze|Evaluate
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
#### 2.1 Instructional Strategy: Expository and Problem based strategy
<div>  
In this experiment we have used expository strategy to perform addition of two binary numbers by using minimum number of gates as well as calculate the carry generate, this carry is used for further calculation. In this experiment we have also used problem based strategy in which student will do following things:</br>
> Input the four bit binary input in A and B.</br>
> Select the respective Ai and Bi.</br>
> Enter the value of Ci(0,1) in the respective box.</br>
> Student will get “carry propagate” (Pi) and “carry generate” (Gi).</br>

#### 2.2 Assessment Method:
 
For assessment method we are trying to use formative assessment in which pre test will be taken to check your knowledge and interest in the given experiment.</br>
For assessment method we are trying to use summative assessment in which post test will be taken to check how efficiently you were able to perform the experiment.</br>
#### 2.3 Description of sections:
In first section we have included:</br>
- Read theory of Carry look-ahead adder.</br></br>
- Select logic gates and other components.</br>
- Drag and Drop on canvas.</br>
- Connect each compone </br>
In Second section:</br> 
- Give the inputs for parameter A and B.</br>
- Click on logic Gate step by step to see the output of that Gate.</br>
- Output of previous Gate will be carry forwarded to the next Gate for further calculation.  </br>
In third section:</br>
- Now for examine the working of Carry Look Ahead adder by inputting different set of input values.</br>
- On the basis of given input student will get the sum and carry respectivly through the given logic gates.</br>
- Total sum and final carry will be obtained.</br>
- Input the value of time delay for each Gate in the logical circuit.</br>
- Click on Delay button to calculate Delay.   </br>
- Calculate and show the time delay for logical circuit.</br>

Firstly select Ai and Bi as your inputs from A and B. In the first section two inputs Ai and Bi need to be selected which when pass through XOR gate will result in carry propagate .The next section will have carry propagate and carry input as your inputs which will pass Through second XOR gate and which will result in Si. In Third section we will have same input Ai and Bi which will pass through AND gate that will result in carry generate. In Fourth section we need to calculate C(i+1) which will be generated when Pi , Cin passes through AND gate and then along with them Gi passes through OR gate. Formula used-
                             Pi=Ai * Bi +Ai * Bi               (Pi is carry propagate)</br>
                             Gi=Ai * Bi                        (Gi is carry generate)</br>
                            	Si=Pi * Ci +Pi * Ci               (Si is sum)</br>
                             C(i+1) = Gi + Pi * Ci  </br>


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
1.|Student will be able to sketch logic diagram of Carry look-ahead adder. |Students will:</br>have to Read theory of Carry look-ahead adder.</br> Select logic gates and other components.</br>Drag and Drop on canvas.</br>Connect each component.|Identify the name of gates those are the use to draw logic.</br>What is AND, OR and XOR gates?
2.|Students will be able to explain the functioning of Carry look-ahead adder.| Students will:</br>Give the inputs for parameter A and B.</br>Click on logic Gate step by step to see the output of that Gate.</br>Output of previous Gate will be carry forwarded to Next Gate for further calculation.|What is the purpose of carry Look Ahead adder?</br>Identify the suitable Boolean function of first adder?
3.|Student will be able to examine the working of Carry look-ahead adder for the different inputs.|Now for examine the working of Carry Look Ahead adder by inputting different set of input values.| What is the working of generating carry and sum in CLA.</br>How many numbers of gates are used in experiment?
4.|Make use of AND, XOR and OR logic gates to evaluate the sum and carry.|Student will On the basis of given input student will get the sum and carry of each adder.</br>Total sum and final carry will obtain.</br>|How to evaluate the sum of two binary numbers?
5.|Student will be able to analyze Delay of Carry look-Ahead adder.| Input the value of time delay for each Gate in the logical circuit.</br>Click on Delay button to calculate Delay.</br>Calculate and show the time delay for logical circuit.|How to calculate delay of Carry look-ahead adder

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
1.|Read theory of Carry look-ahead adder.</br>Select logic gates and other components.</br>Drag and Drop on canvas.</br>Connect each component.|Simulator will show the logical circuit in canvas.| Students will visualize the logic diagram of CLA.
2.|Give the inputs for parameter A and B. |Accept input from student.</br>Calculate output at each Gate. </br>|Student will achieve the output of each Gate.
3.|Click on logic Gate step by step to see the output of that Gate.</br>Output of previous Gate will be carry forwarded to next Gate for further calculation.</br>|Forward output to next Gate for further calculation.|what is C(i) generate.
4.|will Now examine the working of Carry Look Ahead adder by inputting different set of input values|Give output to different set of inputs after passing the input through XOR and AND gate respectively. |Student will get the output at different inputs.
5.|Student will:</br>On the basis of given input student will get the sum and carry of each adder.</br>Total sum and final carry will obtain.</br>|Simulator will show the final results in form of Sum and Carry.|Make use of AND, XOR and OR logic gates to evaluate the sum and carry.  
6.|Input the value of time delay for each Gate in the logical circuit.</br>Click on Delay button to calculate Delay.</br>Calculate and show the time delay for logical circuit.</br>|Accept input from student for Delay calculation.</br>Simulator will give Delay on the basis of given processing time of each Gate.</br>|Student will be able to analyze Delay of Carry look-Ahead adder.
