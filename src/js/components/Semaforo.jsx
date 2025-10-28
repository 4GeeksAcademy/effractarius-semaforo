import React, { useState } from 'react';

const Semaforo = () => {
    const [color, setColor] = useState('red');

    const EstiloLuz = (ColorLuz) => ({
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        margin: '10px auto',
        backgroundColor: ColorLuz,
        opacity: color === ColorLuz ? 1 : 0.5,
        boxShadow: color === ColorLuz ? `0 0 20px ${ColorLuz}` : 'none',
        cursor: 'pointer',
        transition: 'opacity 0.3s, box-shadow 0.3s',
    });

    const cicloColor = () => {
    setColor((prev) =>
      prev === 'red' ? 'yellow' : prev === 'yellow' ? 'green' : 'red'
    );
  };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                style={{
                    width: '20px',
                    height: '150px',
                    backgroundColor: 'black',

                }}
            />

            <div
                style={{
                    width: '150px',
                    backgroundColor: 'black',
                    padding: '20px',
                    borderRadius: '10px',
                    margin: 'auto',
                }}
            >
                <div style={EstiloLuz('red')} onClick={() => setColor('red')} />
                <div style={EstiloLuz('yellow')} onClick={() => setColor('yellow')} />
                <div style={EstiloLuz('green')} onClick={() => setColor('green')} />
            </div>

            <button
                onClick={cicloColor}
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginTop: '40px'
                }}
            >
                Cambiar luz
            </button>

        </div>
    );
};

export default Semaforo;