import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import BudgetTransparency from '../components/budget/BudgetTransparency';

const BudgetPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Transparansi APBDes" 
        description="Informasi lengkap mengenai penggunaan anggaran Desa Kersik"
        image="https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Anggaran Pendapatan dan Belanja Desa</h2>
            <p className="text-gray-600">
              Transparansi anggaran adalah komitmen kami untuk membangun kepercayaan masyarakat. Berikut adalah rincian APBDes Desa Kersik tahun 2024.
            </p>
          </div>
          
          <BudgetTransparency />
        </div>
      </section>
    </div>
  );
};

export default BudgetPage;