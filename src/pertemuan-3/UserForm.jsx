import InputField from "./components/InputField";

export default function UserForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5E2E3] p-5">
      
      {/* CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 border border-[#F5E2E3]">
        
        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#D0A0A3]">
          Tambah User
        </h2>

        {/* NAMA */}
        <label className="block text-[#D0A0A3] font-medium mb-1">
          Nama
        </label>
        <InputField
          type="text"
          placeholder="Masukkan Nama"
          className="w-full p-2 border border-[#ECCBC9] rounded-lg mb-3 
                     focus:outline-none focus:ring-2 focus:ring-[#ECCBC9]"
        />

        {/* EMAIL */}
        <label className="block text-[#D0A0A3] font-medium mb-1">
          Email
        </label>
        <InputField
          type="email"
          placeholder="Masukkan Email"
          className="w-full p-2 border border-[#ECCBC9] rounded-lg mb-3 
                     focus:outline-none focus:ring-2 focus:ring-[#ECCBC9]"
        />

        {/* TANGGAL */}
        <label className="block text-[#D0A0A3] font-medium mb-1">
          Tanggal Lahir
        </label>
        <InputField
          type="date"
          className="w-full p-2 border border-[#ECCBC9] rounded-lg mb-5 
                     focus:outline-none focus:ring-2 focus:ring-[#ECCBC9]"
        />

        {/* BUTTON */}
        <button className="w-full bg-[#D0A0A3] text-white p-2 rounded-xl 
                           shadow-md hover:bg-[#E0C5C4] hover:text-[#5A4A4A]
                           transition duration-300">
          Simpan
        </button>

      </div>
    </div>
  );
}