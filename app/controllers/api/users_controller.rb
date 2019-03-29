class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by_credentials(user_params[:username],user_params[:password])
        if @user.update_attrributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def destroy
        @user = User.find_by_credentials(user_params[:username],user_params[:password])
        if @user.destroy
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end