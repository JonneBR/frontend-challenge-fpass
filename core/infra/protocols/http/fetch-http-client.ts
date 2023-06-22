import { HttpClient, HttpRequest, HttpResponse } from "core/data/protocols/http"

export class FetchHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let fetchResponse: Response | null = null
    try {
      fetchResponse = await fetch(data.url, {
        method: data.method,
        headers: data.headers,
        body: data.body,
      })

      if (!fetchResponse.ok) {
        throw new Error(fetchResponse.statusText, { cause: fetchResponse.status })
      }

      {
        const data = await fetchResponse?.json()
        return {
          statusCode: fetchResponse?.status,
          body: data,
        }
      }
    } catch (error: any) {
      return {
        statusCode: error.cause,
        body: error.message,
      }
    }
  }
}
