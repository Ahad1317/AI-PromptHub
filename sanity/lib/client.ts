import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skVZ4TijJeOF8UysKZEV33lO5cxgaZ1xcp9YlG6z6BOHmeZwfxJQDjmgYV8NR8hCAkQaO6rnqFO7neJfpr0m1fp1SQONlyW0223JswosHsmnAQLHudwTBaxVbcHPVpUQUSOAcj0cRmq4RYJErEkPsYntImYZkHE79sinMXz2E3cSv3wy6Kk3"
})
