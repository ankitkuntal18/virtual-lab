

<head>
<title> VIRTUAL LAB </title>
<link rel="stylesheet" type="text/css" href="css/style2.css"> 




</head>

<body>
<header>
<p2> <a name="THEORY"><h1>THEORY:</h1><h3>Design of Carry Lookahead Adders</h3><p/2>
 
                         
         <p1>To reduce the computation time, there are faster ways to add two binary numbers by using carry lookahead adders. They work by creating two signals P and G known to be Carry Propagator and Carry Generator. The carry propagator is propagated to the next level whereas the carry generator is used to generate the output carry ,regardless of input carry.
        <br> 
The number of gate levels for the carry propagation can be found from the circuit of full adder. The signal from input carry Cin to output carry Cout requires an AND gate and an OR gate, which constitutes two gate levels. So if there are four full adders in the parallel adder, the output carry C5 would have 2 X 4 = 8 gate levels from C1 to C5. For an n-bit parallel adder, there are 2n gate levels to propagate through.

Design Issues :

The corresponding boolean expressions are given here to construct a carry lookahead adder. In the carry-lookahead circuit we ned to generate the two signals carry propagator(P) and carry generator(G),

<br>Pi = Ai ⊕ Bi<br>

<br>Gi = Ai · Bi<br>

The output sum and carry can be expressed as

<br>Sum(i) = Pi ⊕ Ci<br>

<br>C(i+1) = Gi + ( Pi · Ci)<br>
<br>
Having these we could design the circuit. We can now write the Boolean function for the carry output of each stage and substitute for each Ci its value from the previous equations:
<br>
<br>C1 = G0 + P0 · C0<br>

<br>C2 = G1 + P1 · C1 = G1 + P1 · G0 + P1 · P0 · C0<br>

<br>C3 = G2 + P2 · C2 = G2 P2 · G1 + P2 · P1 · G0 + P2 · P1 · P0 · C0<br>

<br>C4 = G3 + P3 · C3 = G3 P3 · G2 P3 · P2 · G1 + P3 · P2 · P1 · G0 + P3 · P2 · P1 · P0 · C0<br>

 </a>
    </p1>
<fieldset>
<form>


<h4>The block diagram of a 4-bit carry lookahead adder :</h4>

<img Src="image.jpg" width="600" height="400" title="carry lookahead adder"></br>
comment:<br>
<textarea row="10" cols="40"></textarea></br>
</form>
</fieldset>
</header>
</body>
</html>
