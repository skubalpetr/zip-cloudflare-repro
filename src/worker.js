import { TextReader, ZipWriter } from "@zip.js/zip.js";

export default {
  async fetch(request, env, ctx) {
    const { readable, writable } = new TransformStream();
    const zipWriter = new ZipWriter(writable);

    await zipWriter.add("hello.txt", new TextReader("Hello world!"));
    await zipWriter.close();

    return new Response(readable, {
      status: 200,
      headers: {
        "Content-Disposition": 'attachment; filename="file.zip"',
        "Content-Type": "application/zip",
        "Cache-Control": "no-cache",
      },
    });
  },
};
