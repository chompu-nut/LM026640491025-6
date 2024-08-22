import { useState } from "react";

export default function CreateCard() {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const [cards, setCards] = useState([]);
    const [nextId, setNextId] = useState(1); 
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleClickAdd = () => {
        setCards(prevCards => [
            ...prevCards,
            {
                id: nextId,
                name: name,
                note: note,
                phone: phone,
                image: image ? URL.createObjectURL(image) : null 
            }
        ]);
       
       
        setName('');
        setNote('');
        setPhone('');
        setImage(null);

        
        setNextId(prevId => prevId + 1);
    };

    const handleOpenModal = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">เพิ่มข้อมูลยาสนุมไพร:</h1>
            <div className="mb-4">
                <label htmlFor="cName" className="block text-lg font-semibold text-blue-600 mb-2">ชื่อยาสมุนไพร</label>
                <input 
                    id="cName"
                    name="cName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="กรุณากรอกชื่อยาสนุมไพร"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="cNote" className="block text-lg font-semibold text-blue-600 mb-2">รายละเอียด:</label>
                <textarea 
                    id="cNote"
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="กรุณากรอกรายละเอียด"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="cPhone" className="block text-lg font-semibold text-blue-600 mb-2">การนำเอาไปใช้</label>
                <input 
                    id="cPhone"
                    name="cPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="tel"
                    placeholder="กรุณากรอกการนำเอาไปใช้"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="cImage" className="block text-lg font-semibold text-blue-600 mb-2">อัพโหลดรูปภาพตัวอย่าง</label>
                <input 
                    id="cImage"
                    name="cImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full text-sm text-blue-500 file:py-2 file:px-4 file:border file:border-blue-300 file:rounded-lg file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>
            <button 
                onClick={handleClickAdd} 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
                เพิ่มข้อมูลยาสนุมไพร:
            </button>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex justify-between items-center">
                    รายการยาสมุนไพร
                    <span className="text-lg text-gray-600">จำนวน {cards.length} รายการยาสมุนไพร</span>
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="p-3 text-left">ID</th>
                                <th className="p-3 text-left">รูปภาพตัวอย่าง</th>
                                <th className="p-3 text-left">ชื่อยาสมุนไพร</th>
                                <th className="p-3 text-left">การนำเอาไปใช้</th>
                                <th className="p-3 text-left">อัพโหลดรูปภาพตัวอย่าง</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map(card => (
                                <tr key={card.id} className="border-b">
                                    <td className="p-3">{card.id}</td>
                                    <td className="p-3">
                                        {card.image && (
                                            <img
                                                src={card.image}
                                                alt="Card"
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                        )}
                                    </td>
                                    <td className="p-3">{card.name}</td>
                                    <td className="p-3">{card.note}</td>
                                    <td className="p-3">{card.phone}</td>
                                    <td className="p-3">
                                        <button 
                                            onClick={() => handleOpenModal(card)} 
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg transition-colors duration-300"
                                        >
                                            ดูรายละเอียด
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            
            {isModalOpen && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h3 className="text-xl font-semibold mb-4">ข้อมูลสมุนไพร</h3>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-blue-600 mb-2">ชื่อยาสมุนไพร</label>
                            <p>{selectedCard.name}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-blue-600 mb-2">รายละเอียด</label>
                            <p>{selectedCard.note}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-blue-600 mb-2">การนำเอาไปใช้</label>
                            <p>{selectedCard.phone}</p>
                        </div>
                        {selectedCard.image && (
                            <div className="mb-4">
                                <label className="block text-lg font-semibold text-blue-600 mb-2">อัพโหลดรูปภาพตัวอย่าง</label>
                                <img 
                                    src={selectedCard.image} 
                                    alt="Card" 
                                    className="w-32 h-32 object-cover rounded-lg" 
                                />
                            </div>
                        )}
                        <button 
                            onClick={handleCloseModal} 
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                            ย้อนกลับ
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
