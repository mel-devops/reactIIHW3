import React from 'react';

//Import the CSS file for styling


const Animals = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div>
      <h2>Animals</h2>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <td>{animal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Animals;