class MindfulMinutesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        mindful_minutes = MindfulMinute.new(mindful_minutes_params)
        mindful_minutes.date_time = DateTime.now
        mindful_minutes.save
        if mindful_minutes.valid?
            render json: {mindful_minutes: MindfulMinuteSerializer.new(mindful_minutes)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def mindful_minutes_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
