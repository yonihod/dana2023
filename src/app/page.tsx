import Gallery from '@/components/Gallery'
import { v2 as cloudinary } from 'cloudinary'

// cloudinary.config({
//     cloud_name: "dlh36gh0p", // add your cloud_name
//     api_key: process.env.NEXT_CLOUDINARY_API_KEY, // add your api_key
//     api_secret: process.env.NEXT_CLOUDINARY_API_SECRET, // add your api_secret
//     secure: true
// });

// async function folderToData(folder: {
//   name: string;
//   path: string;
// }) {
//   const json = await cloudinary.url(folder.path + '/data.json', {
//     type: 'upload',
//     resource_type: 'raw',
//   });
//   let jsonData = {};
//   try {
//     const res = await fetch(json);
//     jsonData = await res.json();
//   }catch(e) {
//     console.error('error', e);
//   }
//   const data = (await cloudinary.api.resources({
//     type: 'upload',
//     prefix: folder.name,
//     max_results: 500,
//     tags: true,
//     context: true,
//     metadata: true,
//     resource_type: 'image',
//     backup: false
    
//   }))
//   data.resources = data.resources.filter( (resource: any) => resource.bytes > 0);
//     return {
//       [folder.name] : {
//         data,
//         meta: jsonData,
//       }
//     }
// }

// async function getProjectData() {
//   const { folders } = await cloudinary.api.root_folders();
//   const data = await Promise.all<{
//     name: string;
//     data: any;
//     meta: {};
// }>( folders.map(folderToData) );
// const dataObj = data.reduce((acc, curr) => ({...acc, ...curr}), {});
//   const covers = await (async () => {
//     const coverResources = await cloudinary.api.resources_by_tag('cover');
//     return coverResources.resources.map((cover) => ({publicId: cover.public_id, projectId: cover.folder}));
//   })()
//   return {
//     covers,
//     data: dataObj,
//   }
// }

export default async function Home() {
  // const { covers, data } = await getProjectData();
  const covers = [] as any;
  const data = {} as any;
  return (
    <main className="grid h-full place-items-center z-20 relative w-screen overflow-x-hidden">
      <Gallery covers={covers} data={data}/>
    </main>
  )
}
