import React from 'react';
import Header from './Component/Header';
import CarCard from './Component/CarCard';
import CommentCard from './Component/CommentCard';
import Footer from './Component/Footer';
import './index.css'; // Importe o arquivo CSS

const App: React.FC = () => {
 return (
    <div className="app">
        <Header />
        <main>
            <CarCard 
                imageUrl="https://via.placeholder.com/300" 
                model="Carro Exemplo" 
                year={2023} 
                description="Um carro muito legal." 
            />
            <CommentCard
               author="User Name"
               comment="Comentário de exemplo para o carro"
               date="10/08/2024"
            />
            {/*Adicione outros cards ou conteúdo aqui*/}
        </main>
        <Footer />
    </div>
  );
};

export default App;