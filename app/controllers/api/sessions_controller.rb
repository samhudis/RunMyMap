class Api::SessionsController < ApplicaitonController

    def new
    end

    def create
        user = User.find_by_credentials(
            params[:user][:username],
            params[:user]]:password]
        )

    if user
        login(user)
        render :json
    else
        render :json @user.errors.full_messages, status: 422
    end

    def destroy
        logout
        render :json
    end
end