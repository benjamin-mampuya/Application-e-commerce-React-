import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">S'ABONNER</h3>
                        <p className="text-gray-300 mb-6">
                            Abonnez-vous à notre newsletter en cliquant sur le bouton ci-dessous :
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none"
                            />
                            <button className="bg-red-600 px-6 py-3 rounded-r-md hover:bg-red-700 font-medium">
                                <Mail size={20} className="inline mr-2" />
                                S'abonner
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Accueil</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Produits</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Catégories</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">À propos</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact</h4>
                        <p className="text-gray-300 mb-4">support@shopio.com</p>
                        <p className="text-gray-300">+1 234 567 8900</p>

                        {/* Social Media */}
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 Shopio. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;