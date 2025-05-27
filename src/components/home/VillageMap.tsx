import React from 'react';
import { motion } from 'framer-motion';

const VillageMap: React.FC = () => {
  return (
    <section id="map" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="section-title text-center">Peta Desa Sindangjaya</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Jelajahi lokasi penting di Desa Sindangjaya. Temukan tempat-tempat menarik, fasilitas umum, dan objek wisata yang tersebar di wilayah desa.
          </p>
        </motion.div>

        <motion.div
          className="h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31678.8802059115!2d107.19736885912606!3d-7.025734550454537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e685eb54a60622d%3A0xbaa410fbc2298484!2sSindangjaya%2C%20Kec.%20Gununghalu%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1747322272935!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </motion.div>

        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {['government', 'tourism', 'health', 'education', 'market'].map((type, index) => (
            <motion.div
              key={type}
              className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="text-center">
                <div className="font-medium text-sm">
                  {type === 'government' && 'Pemerintahan'}
                  {type === 'tourism' && 'Wisata'}
                  {type === 'health' && 'Kesehatan'}
                  {type === 'education' && 'Pendidikan'}
                  {type === 'market' && 'Pasar'}
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default VillageMap;
