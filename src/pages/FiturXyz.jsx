import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
    const dataIsu = [
        {
            no: 1,
            isu: "Stabilitas Ekonomi & Nilai Tukar",
            deskripsi: "Mitigasi dampak fluktuasi nilai tukar Rupiah terhadap beban biaya impor bahan baku industri manufaktur dalam negeri.",
            status: "Perhatian",
        },
        {
            no: 2,
            isu: "Akselerasi Literasi AI Nasional",
            deskripsi: "Penyusunan regulasi pemanfaatan Artificial Intelligence (AI) di sektor publik dan kurikulum digitalisasi untuk sekolah.",
            status: "Proses",
        },
        {
            no: 3,
            isu: "Anomali Cuaca & Ketahanan Pangan",
            deskripsi: "Penerapan strategi irigasi modern menghadapi pergeseran puncak musim kemarau guna menjaga produktivitas lahan padi nasional.",
            status: "Sedang diperhatikan",
        },
        {
            no: 4,
            isu: "Transformasi Transportasi Umum",
            deskripsi: "Perluasan rute integrasi antarmoda transportasi massal (LRT, MRT, dan Busway) untuk menekan angka kemacetan kota besar.",
            status: "Aktif",
        },
        {
            no: 5,
            isu: "Penegakan Keamanan Publik",
            deskripsi: "Peningkatan patroli siber dan penguatan hukum terhadap maraknya aksi judi online dan kejahatan digital transnasional.",
            status: "Berjalan",
        },
        {
            no: 6,
            isu: "Keuangan & Utang Luar Negeri",
            deskripsi: "Evaluasi berkala rasio posisi Utang Luar Negeri (ULN) pemerintah demi menjaga keberlanjutan fiskal jangka panjang.",
            status: "Proses",
        },
        {
            no: 7,
            isu: "Subsidi Energi & Inflasi",
            deskripsi: "Penataan ulang skema penyaluran subsidi BBM dan listrik agar lebih tepat sasaran bagi masyarakat kelas ekonomi bawah.",
            status: "Perhatian",
        },
        {
            no: 8,
            isu: "Keamanan Data Nasional",
            deskripsi: "Audit menyeluruh infrastruktur siber pada Pusat Data Nasional (PDN) guna mengantisipasi ancaman ransomware baru.",
            status: "Berjalan",
        },
        {
            no: 9,
            isu: "Pemerataan Akses Pendidikan",
            deskripsi: "Distribusi dan alokasi dana BOS afirmasi untuk perbaikan fasilitas sekolah rusak di wilayah 3T (Tertinggal, Terdepan, Terluar).",
            status: "Aktif",
        },
        {
            no: 10,
            isu: "Dinamika Pasar Tenaga Kerja",
            deskripsi: "Penyediaan program *upskilling* dan *reskilling* gratis melalui Balai Latihan Kerja untuk korban efisiensi industri swasta.",
            status: "Sedang diperhatikan",
        },
    ];

    // Fungsi pembantu untuk memberikan warna badge berdasarkan status
    const getStatusStyle = (status) => {
        switch (status) {
            case "Aktif":
            case "Berjalan":
                return "bg-green-50 text-green-700 border-green-200";
            case "Sedang diperhatikan":
            case "Proses":
                return "bg-blue-50 text-blue-700 border-blue-200";
            case "Perhatian":
                return "bg-amber-50 text-amber-700 border-amber-200";
            default:
                return "bg-gray-50 text-gray-700 border-gray-200";
        }
    };

    return (
        <div>
            {/* Page Header */}
            <PageHeader
                title="Fitur XYZ"
                breadcrumb={["Dashboard", "Fitur XYZ"]}
            />

            {/* Container Tabel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden">
                {/* Header Konten */}
                <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">
                            Daftar Isu Strategis di Indonesia
                        </h2>
                        <p className="text-sm text-pink-500 mt-1">
                            Memantau perkembangan, analisis risiko, dan status penanganan isu nasional terkini.
                        </p>
                    </div>
                    {/* Statistik Ringkas */}
                    <div className="flex gap-2 self-start sm:self-center">
                        <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1.5 rounded-lg font-medium">
                            Total Isu: {dataIsu.length}
                        </span>
                    </div>
                </div>

                {/* Wrapper Tabel Responsif */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-pink-50 border-b border-gray-200">
                            <tr>
                                <th className="p-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-center w-16">No</th>
                                <th className="p-4 text-xs font-semibold uppercase tracking-wider text-gray-500 w-64">Isu Strategis</th>
                                <th className="p-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Deskripsi Masalah & Dampak</th>
                                <th className="p-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-center w-48">Status Tindakan</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {dataIsu.map((item, index) => (
                                <tr key={item.no} className="hover:bg-gray-50/70 transition-colors odd:bg-white even:bg-gray-50/20">
                                    <td className="p-4 text-sm text-gray-400 font-medium text-center">
                                        {String(index + 1).padStart(2, '0')}
                                    </td>
                                    <td className="p-4 text-sm font-semibold text-gray-900 vertical-align-top">
                                        {item.isu}
                                    </td>
                                    <td className="p-4 text-sm text-gray-600 leading-relaxed max-w-xl">
                                        {item.deskripsi}
                                    </td>
                                    <td className="p-4 text-sm text-center">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(item.status)}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80"></span>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}