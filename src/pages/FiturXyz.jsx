import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Data 10 Isu Viral di Indonesia
const viralIssues = [
  { id: 1, topik: "Subsidi Tepat Sasaran BBM", kategori: "Ekonomi", tren: "Naik", status: "Hot" },
  { id: 2, topik: "RUU Perlindungan Data Pribadi Baru", kategori: "Politik", tren: "Stabil", status: "Penting" },
  { id: 3, topik: "Fenomena AI Generatif di Kampus", kategori: "Edukasi", tren: "Naik", status: "Populer" },
  { id: 4, topik: "Kasus Manipulasi Pajak Perusahaan X", kategori: "Hukum", tren: "Naik", status: "Hot" },
  { id: 5, topik: "Suhu Ekstrem Gelombang Panas", kategori: "Lingkungan", tren: "Naik", status: "Penting" },
  { id: 6, topik: "Uji Coba Kereta Cepat Jalur Baru", kategori: "Infrastruktur", tren: "Stabil", status: "Populer" },
  { id: 7, topik: "Tren Thrifting & Regulasi Impor", kategori: "Gaya Hidup", tren: "Turun", status: "Biasa" },
  { id: 8, topik: "Kebocoran Data Medis Nasional", kategori: "Keamanan Siber", tren: "Naik", status: "Hot" },
  { id: 9, topik: "Startup Bubble & Gelombang Layoff", kategori: "Teknologi", tren: "Stabil", status: "Penting" },
  { id: 10, topik: "Restorasi Warisan Budaya UNESCO", kategori: "Budaya", tren: "Stabil", status: "Biasa" },
];

export default function FiturXyz() {
  return (
    <div className="p-6 bg-slate-50/50 min-h-screen font-sans">
      {/* Header Utama Halaman */}
      <PageHeader
        title="Fitur Xyz"
        breadcrumb={["Dashboard", "Fitur Xyz"]}
      />

      {/* ─── KARTU EVENT DENGAN GAMBAR (CardImage Integration) ─── */}
      <Card className="relative w-full max-w-sm pt-0 mt-6 overflow-hidden bg-white border border-slate-200 shadow-md rounded-xl">
        {/* Lapisan overlay gelap semi-transparan untuk estetika gambar */}
        <div className="absolute inset-0 z-30 aspect-video bg-black/35 pointer-events-none" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="p-5">
          <CardAction>
            <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100 font-medium">
              Featured
            </Badge>
          </CardAction>
          <CardTitle className="text-lg font-bold text-slate-800 tracking-tight mt-2">
            Design systems meetup
          </CardTitle>
          <CardDescription className="text-sm text-slate-500 mt-1 leading-relaxed">
            A practical talk on component APIs, accessibility, and shipping faster.
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-5 pt-0">
          <Button className="w-full font-medium shadow-sm">View Event</Button>
        </CardFooter>
      </Card>
      
      {/* Kontainer Utama Tabel */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mt-6 overflow-hidden transition-all duration-300 hover:shadow-md">

        {/* Header internal di dalam Card */}
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-white to-slate-50/50">
          <div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">
              10 Isu Viral Indonesia
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Pantau topik yang paling banyak dibicarakan dan mendapat traksi tinggi saat ini.
            </p>
          </div>
          <Button variant="outline" size="sm" className="font-medium shadow-sm hover:bg-slate-50">
            🔄 Refresh Data
          </Button>
        </div>

        {/* Tabel UI */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/70 border-b border-slate-100">
              <TableRow>
                <TableHead className="w-[60px] text-center font-semibold text-slate-600">No</TableHead>
                <TableHead className="font-semibold text-slate-600">Topik Isu</TableHead>
                <TableHead className="font-semibold text-slate-600">Kategori</TableHead>
                <TableHead className="font-semibold text-slate-600">Tren</TableHead>
                <TableHead className="font-semibold text-slate-600">Status</TableHead>
                <TableHead className="text-right font-semibold text-slate-600 pr-6">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {viralIssues.map((issue, index) => (
                <TableRow key={issue.id} className="hover:bg-slate-50/60 transition-colors group">
                  <TableCell className="text-center font-medium text-slate-400 group-hover:text-slate-600">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-semibold text-slate-900 max-w-[320px] truncate">
                    {issue.topik}
                  </TableCell>
                  <TableCell>
                    <span className="text-xs text-slate-600 bg-slate-100/80 border border-slate-200/60 px-2.5 py-1 rounded-full font-medium shadow-sm">
                      {issue.kategori}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`text-sm font-bold flex items-center gap-1 ${
                      issue.tren === 'Naik' ? 'text-emerald-600' :
                      issue.tren === 'Turun' ? 'text-rose-600' : 'text-amber-600'
                    }`}>
                      {issue.tren === 'Naik' ? '▲' : issue.tren === 'Turun' ? '▼' : '■'}
                      <span className="font-medium text-xs">{issue.tren}</span>
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge className={`font-semibold tracking-wide text-xs px-2.5 py-0.5 shadow-sm border ${
                      issue.status === 'Hot' ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100' :
                      issue.status === 'Penting' ? 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100' :
                      issue.status === 'Populer' ? 'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100' :
                      'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}>
                      {issue.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex justify-end gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="sm" className="h-8 text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                        Detail
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 text-rose-600 border-rose-200 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300">
                        Take Down
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer Tabel & Pagination */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/40 flex justify-between items-center text-xs text-slate-500 font-medium">
          <span>Menampilkan 10 dari 10 isu global</span>
          <div className="flex gap-1.5">
            <Button variant="outline" size="sm" disabled className="h-8 px-3 text-xs bg-white">Prev</Button>
            <Button variant="outline" size="sm" disabled className="h-8 px-3 text-xs bg-white">Next</Button>
          </div>
        </div>

      </div>

      {/* Kontainer Tombol Aksi Pembatalan */}
      <div className="mt-6 flex gap-3 justify-end bg-white p-4 rounded-xl border border-slate-200 shadow-sm items-center">
        <span className="text-xs text-slate-400 mr-auto hidden sm:inline-block">Perubahan belum disimpan</span>
        <Button variant="ghost" className="text-slate-600 hover:bg-slate-100 font-medium">
          Batal (Ghost)
        </Button>
        <Button variant="outline" className="border-slate-200 text-slate-700 font-medium hover:bg-slate-50 shadow-sm">
          Batal (Outline)
        </Button>
        <Button variant="destructive" className="font-medium shadow-sm shadow-rose-100">
          Batal (Destructive)
        </Button>
      </div>

    </div>
  );
}