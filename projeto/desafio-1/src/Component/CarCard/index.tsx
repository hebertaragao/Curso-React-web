import React from 'react';

interface CarCardProps {
 imageUrl: string;
 model: string;
 year: number;
 description: string;
}

const CarCard: React.FC<CarCardProps> = ({ imageUrl, model, year, description }) => {
  return (
    <div className="car-card">
      <img src={imageUrl} alt={model} />
      <h2>{model}</h2>
      <p>Ano: {year}</p>
      <p>{description}</p>
    </div>
  );
};

export default CarCard;