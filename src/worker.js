import createThenReadZip from "../create-and-read-zip.mjs";

export default {
  async fetch(request, env, ctx) {
    const zipFileBlob = await createThenReadZip();

    return new Response(zipFileBlob, {
      status: 200,
      headers: {
        "Content-Disposition": 'attachment; filename="file.zip"',
        "Content-Type": "application/zip",
        "Cache-Control": "no-cache",
      },
    });
  },
};
