class Api::SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if user
            login(user)
            render json: user
        else
            render json: ["Incorrect username or password. Please try again."], status: 401
        end
    end

    def destroy
        logout
        render json: {}
    end
end

