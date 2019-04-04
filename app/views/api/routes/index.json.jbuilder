@routes.each do |route|
    json.set! route.id do
        json.partial! 'routes', route: route
    end
end