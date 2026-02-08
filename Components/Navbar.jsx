import React from 'react';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                        <h1 className="text-2xl font-bold">
                            <span className="text-red-600">Shop</span>
                            <span className="text-gray-800">io</span>
                        </h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Rechercher des produits..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <button className="absolute right-0 top-0 h-full px-4 bg-red-600 text-white rounded-r-md hover:bg-red-700">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
                            <User size={22} />
                            <span className="hidden md:inline">Compte</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
                            <Heart size={22} />
                            <span className="hidden md:inline">Favoris</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600 relative">
                            <ShoppingCart size={22} />
                            <span className="hidden md:inline">Panier</span>
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-4 hidden md:block">
                    <ul className="flex space-x-8 text-gray-700">
                        <li><a href="#" className="hover:text-red-600 font-medium">Accueil</a></li>
                        <li><a href="#" className="hover:text-red-600">Produits</a></li>
                        <li><a href="#" className="hover:text-red-600">Catégories</a></li>
                        <li><a href="#" className="hover:text-red-600">Promotions</a></li>
                        <li><a href="#" className="hover:text-red-600">Nouveautés</a></li>
                        <li><a href="#" className="hover:text-red-600">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;