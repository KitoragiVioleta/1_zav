import http from "k6/http";
import { sleep } from "k6";

export const options = {
  duration: "1m",
  vus: 50,
  thresholds: {
    http_req_failed: ["rate<0.01"],     // помилки < 1%
    http_req_duration: ["p(95)<10"],   // 95-й перцентиль < 500 мс
  },
};

export default function () {
  http.get("https://quickpizza.grafana.com/");
  sleep(1);
}
