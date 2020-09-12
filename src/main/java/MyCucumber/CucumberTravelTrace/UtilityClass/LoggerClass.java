package MyCucumber.CucumberTravelTrace.UtilityClass;

import org.apache.log4j.Logger;

//import java.util.logging.Logger;

import org.apache.log4j.PropertyConfigurator;

public class LoggerClass {
	public static boolean logStat = false;
	
	public static Logger getLogger(Class cls) {
		if( logStat == true) {
			return Logger.getLogger(cls);
		}
		PropertyConfigurator.configure("log4j.properties");
		logStat=true;
		return Logger.getLogger(cls);
	}

}
