package net.katk.tools;

import java.util.List;
import java.util.Vector;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Define logger and configure log level.
 */
public class Log
{
	static Level _defaultLevel = Level.INFO;

	private static List<Logger> _loggers = new Vector<>();

	public static Logger getLogger(final String name)
	{
		final Logger logger = Logger.getLogger(name);
		_loggers.add(logger);
		logger.setLevel(_defaultLevel);
		return logger;
	}

	public static Logger getLogger(final Class<?> type)
	{
		final Logger logger = Logger.getLogger(type.getSimpleName());
		_loggers.add(logger);
		logger.setLevel(_defaultLevel);
		return logger;
	}

	public static void setLevel(final Logger logger, final Level level)
	{
		logger.setLevel(level);
	}

	public static void setLevel(final Level level, final String filter)
	{
		for (final Logger logger : _loggers)
			if (logger.getName().contains(filter))
				logger.setLevel(level);
	}

	public static void setLevel(final Level level)
	{
		for (final Logger logger : _loggers)
			logger.setLevel(level);
	}

	public static void setLevel(final Level level, final Class<?> type)
	{
		setLevel(level, type.getSimpleName());
	}

	public static void error(final Logger logger, final Throwable e)
	{
		logger.log(Level.SEVERE, "", e);
	}
}
