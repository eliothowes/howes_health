class TimeStandingsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        time_standing = TimeStanding.new(time_standing_params)
        time_standing.date_time = DateTime.now
        time_standing.save
        if time_standing.valid?
            render json: {time_standing: TimeStandingSerializer.new(time_standing)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def time_standing_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
