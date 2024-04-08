import React from 'react';

const listadenombres: string[] = [
  'Josue', 'Ismael', 'Diego', 'Andres', 'Maria',
  'Eduardo', 'Luis', 'Carmen', 'Daniel', 'Mateo'
];

const App: React.FC = () => {
  return (
    <div>
      <h2>Lista de nombres</h2>
      <ul>
        {listadenombres.map((nombres, index) => (
          <li key={index}>{nombres}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
