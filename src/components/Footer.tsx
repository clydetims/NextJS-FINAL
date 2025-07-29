import { Heart } from 'lucide-react'

export default function Footer() {
    return(
        <footer className=" bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                            <Heart className='w-5 h-5 text-white'/>
                        </div>
                        <span className='text-lg font-semibold'>Hope Foundation</span>
                    </div>
                    <div className='text-center font-semibold'>
                        <p className='text-gray-400 text-sm'>
                            © 2024 Hope Foundation. All rights reserved.
                        </p>
                        <p className='text-gray-400 text-sm'>
                            Building better communities together.
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    )
}