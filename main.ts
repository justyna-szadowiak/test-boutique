import { serveDir } from "https://deno.land/std@0.184.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

const PRODUCTS_ROUTE = new URLPattern({ pathname: "/products/" });
const PRODUCT_ID_ROUTE = new URLPattern({ pathname: "/product/:id" });
const PUBLIC_ROUTE = new URLPattern({ pathname: "/static/*" });

const products = [
  {
    "id": 5431,
    "name": "TechSure Multimeter",
    "price": 49.99,
    "description": "A cutting-edge multimeter for precise electrical measurements.",
    "wiki": "https://en.wikipedia.org/wiki/Multimeter"
  },
  {
    "id": 3838,
    "name": "NanoScan Spectrometer",
    "price": 299.99,
    "description": "The ultimate spectrometer for nanoscale material analysis.",
    "wiki": "ttps://en.wikipedia.org/wiki/Spectrometer"
  },
  {
    "id": 3838,
    "name": "OptiGauge Thickness Tester",
    "price": 89.95,
    "description": "An advanced gauge for accurate thickness measurement.",
    "wiki": "https://en.wikipedia.org/wiki/Calo_tester"
  },
  {
    "id": 2921,
    "name": "PrecisionFlow pH Meter",
    "price": 74.50,
    "description": "Achieve precision with this state-of-the-art pH meter.",
    "wiki": "https://en.wikipedia.org/wiki/PH_meter"
  },
  {
    "id": 5383,
    "name": "MicroDex Data Logger",
    "price": 39.95,
    "description": "Capture and log data effortlessly with MicroDex.",
    "wiki": "https://en.wikipedia.org/wiki/Data_logger"
  },
];

async function handler(req: Request): Promise<Response> {
  const productsMatch = PRODUCTS_ROUTE.exec(req.url);
  const productIdMatch = PRODUCT_ID_ROUTE.exec(req.url);
  const publicMatch = PUBLIC_ROUTE.exec(req.url);

  if (productsMatch) {
    return new Response(JSON.stringify(products), { headers: { "content-type": "application/json; charset=utf-8", 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' }});
  } else if (productIdMatch) {
    const URLid = productIdMatch.pathname.groups.id;
    return new Response(
      JSON.stringify(
        [
          products.find(product => product.id === Number(URLid)),
          products[0]
        ]),
        { headers: { "content-type": "application/json; charset=utf-8", 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' }});
  }
  else if (publicMatch) {
    // PUBLIC ROUTE
    return serveDir(req, {
      fsRoot: "static",
      urlRoot: "static",
    });
  }

  return new Response("PrecisionTestPro");
}

serve(handler);