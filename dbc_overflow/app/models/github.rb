module Github

  class Client
    include HTTParty
    base_uri "https://api.github.com"


    def zen(access_token)
      headers ={"User-Agent" => "juan267"}
      response = self.class.get('/zen',:query => {:access_token => access_token})
      if response.headers['status'] == '403 Forbidden'
        Quote.rand_quote
      else
        Quote.create(quote:response)
        return response
      end
    end

    def organization(access_token, user)
      headers ={"User-Agent" => "juan267"}
      response = self.class.get("/users/#{user}/orgs", query: {:access_token => access_token.to_s}, headers: headers)

      return JSON.parse(response.body)
    end

  end

end