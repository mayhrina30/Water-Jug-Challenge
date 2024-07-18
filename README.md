
<h1>Water Jug Challenge</h1>
</p>1.RESTful API:
• Develop endpoints to accept jug capacities (X and Y) and the target volume (Z) as inputs.
• Ensure the API strictly adheres to REST principles with appropriate use of HTTP 
methods.
• Responses must be provided in JSON format detailing the sequence of actions to solve 
the riddle or indicating if no solution is possible.</p>

<p>2Algorithm Implementation:
• Implement an algorithm that determines the sequence of steps needed to measure 
exactly Z gallons, if feasible.
• The solution must consider the actions: Fill, Empty, and Transfer (between the two jugs 
only).</p>

<>3Performance Considerations:
• Optimize the algorithm for quick response times, especially considering the potential for 
large input values.</p>

5. Error Handling and Validation:
• Validate input to ensure X, Y, and Z are positive integers.
• Return meaningful error messages in JSON format if inputs are invalid or if no solution 
can be found.

7. Testing:
• Create unit tests to verify the correctness of the algorithm.
• Include integration tests to ensure the API handles requests and responses correctl

<1>How to run</h>

Clone the project using the following command on your terminal:


Install the dependencies

npm install


npm start
