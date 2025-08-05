type ModalProps ={
    isOpen: boolean;
    onClose: ()=>void;
    children: React.ReactNode;
}
export default function Modal({isOpen, onClose, children}:ModalProps) {
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">✖</button>
            {children}
        </div>
    </div>
  )
}
