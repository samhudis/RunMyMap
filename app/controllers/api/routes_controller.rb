class Api::RoutesController < ApplicationController
    def create
        @route = Route.new(route_params)
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 422
        end
    end

    def index
        @routes = Route.all
        render :index
    end

    def show
        @route = Route.find(params[:id])
        render :show
    end

    private
    def route_params
        params.require(:route).permit(:name, :polyline, :user_id)
    end
end
