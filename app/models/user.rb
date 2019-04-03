class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :routes

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        end
        nil
    end

    def is_password?(password)
        test_password = BCrypt::Password.new(self.password_digest)
        test_password.is_password?(password)
    end

    def password=(password)
        @password = password
        # self.password = @password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
