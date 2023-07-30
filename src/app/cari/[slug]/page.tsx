import Image from "next/image";
import Link from "next/link";

async function getDetailUser(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
}
export default async function DetailCari({ params }: { params: { slug: string } }) {
  const data: { name: string; avatar_url: string; location: string; bio: string; html_url: string } = await getDetailUser(params.slug);

  return (
    <section className="mt-5 container mx-auto">
      <h2 className="mb-3">Detail User: {params.slug}</h2>
      <table className="border mb-4">
        <thead>
          <tr className="border">
            <td className="border px-2 py-1">Gambar</td>
            <td className="border px-2 py-1">Nama</td>
            <td className="border px-2 py-1">Location</td>
            <td className="border px-2 py-1">Bio</td>
            <td className="border px-2 py-1">Link</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">
              <Image src={data.avatar_url} alt={data.html_url ? data.html_url : "User Not Found"} width={40} height={40} />
            </td>
            <td className="border px-2 py-1">{data.name}</td>
            <td className="border px-2 py-1">{data.location}</td>
            <td className="border px-2 py-1">{data.bio}</td>
            <td className="border px-2 py-1">
              <a href={data.html_url} target="_blank">
                Kunjungi
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Link href="/cari" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg">
        Back to Search
      </Link>
    </section>
  );
}
