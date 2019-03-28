class Api::SessionsController < ApplicaitonController

    def new
        @user = User.new